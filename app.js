const express = require('express');
const app = express();
const userRouter = require('./router');
const postsRouter = require('./posts');

const PORT = process.env.PORT || 8090

app.use('/user', userRouter)
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.send("NodeJs is awsome!")
})

app.get('*', (req, res) => {
    res.send("<h1>404 not found</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

