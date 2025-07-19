// app.js

const express = require('express');
const app = express();
const messageRoutes = require('./routes/messageRoutes');

app.use(express.json());
app.use('/api', messageRoutes);

module.exports = app;
app.use((req, res) => {
  res.status(404).send("Route not found");
});
