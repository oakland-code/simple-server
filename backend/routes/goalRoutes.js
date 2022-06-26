const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message:'Its up!'})
})

router.post('/', (req, res) => {
    res.status(200).json({message:'Set Goal'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message:`Updated Goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
})


module.exports = router