const express = require('express');
const bcrypt = require('bcryptjs');
const users = require('../data/users');
const { hashPassword, verifyPassword } = require('../utils/hashHelpers');

const router = express.Router();

router.post('/register', (req, res) => {
    const { username, password } = req.body;

    const hash = hashPassword(password); 
    users.push({ username, password: hash});

    res.status(201).json({ message: 'User Registered!'});
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find( u => u.username === username);

    if (!user || !verifyPassword(password, user.password)) {
        return res.status(404).json({ message: "Invalid User or Credentials! "});
    }

    res.json({ message: `Welcome Back: ${username}!`});
});

module.exports = router;