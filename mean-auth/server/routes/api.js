const express = require('express')

const router = express.Router()


const mongoose = require('mongoose')
const db = ""

router.get('/', (req, res) => {
    res.send('from api route')
})

module.exports = router;