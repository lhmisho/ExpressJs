const express = require('express');
const app = express();
const PORT = process.env.PORT || 8090

const router = express.Router()

router.get('/login', (req, res) => {
    res.send('I am login route');
})

router.get('/logout', (req, res) => {
    res.send('I am logout route');
})

router.get('/signup', (req, res) => {
    res.send('I am signup')
})

app.use('/user', router)


app.get('/', (req, res) => {
    res.send("NodeJs is awsome!")
})

app.get('*', (req, res) => {
    res.send("<h1>404 not found</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

