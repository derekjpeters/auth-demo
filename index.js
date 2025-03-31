const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/authRouter');

const server = express();
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);

server.listen(4000, () =>{
    console.log('Server is running on http://localhost:4000');
})