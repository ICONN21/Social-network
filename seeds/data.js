const usernames = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
    'user6',
    'user7',
    'user8',
    'user9',
    'user10',
  ];
  
  const emails = [
    'user1@example.com',
    'user2@example.com',
    'user3@example.com',
    'user4@example.com',
    'user5@example.com',
    'user6@example.com',
    'user7@example.com',
    'user8@example.com',
    'user9@example.com',
    'user10@example.com',
  ];
  
  const thoughts = [
    'I love coding!',
    'JavaScript is awesome!',
    'MongoDB makes storing data easy.',
    'Express is so flexible!',
    'Node.js is powerful!',
    'React is a fantastic front-end library.',
    'I enjoy building full-stack applications.',
    'Learning new technologies is fun!',
    'The MERN stack is great for web development.',
    'API development is challenging but rewarding.',
  ];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomUsername = () => getRandomArrItem(usernames);
  const getRandomEmail = () => getRandomArrItem(emails);
  
  const getRandomThoughts = (num) => {
    const results = [];
    for (let i = 0; i < num; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
        createdAt: new Date(),
        reactions: [],
      });
    }
    return results;
  };
  
  module.exports = { getRandomUsername, getRandomEmail, getRandomThoughts };
  