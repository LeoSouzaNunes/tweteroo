import express from 'express';
import cors from 'cors';
import { userData, messageData } from './data/data.js';

const server = express()
server.use(express.json())
server.use(cors())

server.post('/sign-up', (req, res) => {
    userData.push(req.body)
    console.log(userData)
    res.send('OK')
})


server.listen(5000, () => console.log('Running at http://localhost:5000'))