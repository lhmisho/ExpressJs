const express = require('express');
const app = express()

const PORT = process.env.PORT || 8090


function customeMiddleWare(req, res, next){
    if(req.url === '/help'){
        res.send('<h1>This page is blocked by admin</h1>')
    }
    next()
}

function tinyLogger(){
    return (req, res, next) =>{
        console.log(`${req.method} -- ${req.url}`)
        next()
    }
}

let middlewares = [customeMiddleWare, tinyLogger()]
app.use(middlewares)

app.get('/', (req, res) => {
    res.send("<h1>I am listening</h1>")
})

app.get('/about', (req, res) => {
    res.json({
        message: "This is massege from about"
    })
})

app.get('/help', (req, res) => {
    res.json({
        message: "This is massege from about"
    })
})

app.get('*', (req, res) => {
    res.send("<h1>404 not found</h1>")
})



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

