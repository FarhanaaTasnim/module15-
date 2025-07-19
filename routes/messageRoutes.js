// routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const { getMessage, postMessage } = require('../controllers/messageController');

router.get('/message', getMessage);
router.post('/message', postMessage);

module.exports = router;
