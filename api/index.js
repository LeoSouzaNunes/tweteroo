import express from 'express';
import cors from 'cors';
import { userData, messageData } from './data/data.js';

const server = express()
server.use(express.json())
server.use(cors())

server.get('/tweets', (req, res) => {
    res.send(messageData)
})

server.post('/sign-up', (req, res) => {
    userData.push(req.body)
    console.log(userData.reverse())
    res.send('OK')
})

server.post('/tweets', (req, res) => {
    const username = req.body.username
    const tweet = req.body.tweet

    const found = userData.find((data) => data.username === username)

    messageData.push({ ...found, tweet })
    res.send('OK')
})

server.listen(5000, () => console.log('Running at http://localhost:5000'))