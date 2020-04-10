const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('All posts')
})

router.post('/', (req, res) => {
    res.send('New post created')
})

router.get('/:postId', (req, res) => {
    res.send('New post created' + req.params.postId)
})

router.put('/:postId', (req, res) => {
    res.send('Post Updated' + req.params.postId)
})

router.delete('/:postId', (req, res) => {
    res.send('Post deleted' + req.params.exports)
})

module.exports = router