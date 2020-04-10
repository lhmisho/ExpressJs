const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('All posts')
})

router.post('/', (req, res) => {
    res.send('New post created')
})

router.put('/', (req, res) => {
    res.send('Post Updated')
})

router.delete('/', (req, res) => {
    res.send('Post deleted')
})

module.exports = router