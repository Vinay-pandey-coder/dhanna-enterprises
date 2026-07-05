const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const Admin = require('./models/Admin')

dotenv.config()
mongoose.connect(process.env.MONGO_URI)

const seed = async () => {
  await Admin.deleteMany()
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
  await Admin.create({ 
    email: process.env.ADMIN_EMAIL, 
    password: hashedPassword 
  })
  console.log('Admin created')
  process.exit()
}

seed()