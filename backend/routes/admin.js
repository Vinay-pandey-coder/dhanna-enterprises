const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const { getAllUsers, deleteUser } = require('../controllers/adminController')

router.get('/users', protect, getAllUsers)
router.delete('/users/:id', protect, deleteUser)

module.exports = router