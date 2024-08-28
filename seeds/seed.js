const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
    });
  }

  // Insert users into the database
  await User.insertMany(users);

  // Assign a random user ID to each thought and insert them into the database
  for (let i = 0; i < thoughts.length; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    thoughts[i].username = randomUser.username;

    const newThought = await Thought.create(thoughts[i]);
    await User.findOneAndUpdate(
      { username: randomUser.username },
      { $addToSet: { thoughts: newThought._id } }
    );
  }

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
