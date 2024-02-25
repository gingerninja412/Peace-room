const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const studentController = {}

studentController.add = async (req, res) => {
}

studentController.logout = async (req, res) => {

}

studentController.login = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = studentController