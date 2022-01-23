import express from 'express';
import cors from 'cors';
import { userData, messageData } from './data/data.js';

const server = express()
server.use(express.json())
server.use(cors())

console.log(userData)

server.get('/tweets', (req, res) => {
    res.send(messageData.slice(0, 10))
})

server.post('/sign-up', (req, res) => {
    if (req.body.username === '' || req.body.avatar === '') {
        res.sendStatus(400)
        res.send('Todos os campos são obrigatórios!')
        return
    }

    userData.push(req.body)
    res.send('OK')
})

server.post('/tweets', (req, res) => {
    const username = req.body.username
    const tweet = req.body.tweet

    if (tweet === '' || username === '') {
        res.sendStatus(400)
        res.send('Todos os campos são obrigatórios!')
        return
    }

    const found = userData.find((data) => data.username === username)

    messageData.unshift({ ...found, tweet })
    res.send('OK')
})

server.listen(5000, () => console.log('Running at http://localhost:5000'))