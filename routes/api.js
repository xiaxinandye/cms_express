const express = require('express')
const router = express.Router()

const api_controller = require('../controllers/apiController')

router.get('/lunbo', api_controller.lunbo)

module.exports = router;