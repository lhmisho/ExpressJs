const express = require('express');
const app = express()

const PORT = process.env.PORT || 8090

app.get('/', (req, res) => {
    res.send("<h1>I am listening</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
