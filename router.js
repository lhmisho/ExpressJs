const router = require('express').Router()

router.get('/login', (req, res) => {
    res.send('I am login route');
})

router.get('/logout', (req, res) => {
    res.send('I am logout route');
})

router.get('/signup', (req, res) => {
    res.send('I am signup')
})

module.exports = router