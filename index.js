const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in the `routes` folder
app.use('/api', routes);
console.log(app._router.stack);  // Add this line to log the stack of routes

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Connected on localhost:${PORT}`);
  });
});
