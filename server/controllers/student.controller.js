const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const studentController = {}

studentController.add = async (req, res) => {
}

studentController.logout = async (req, res) => {

}

studentController.login = async (req, res) => {
  console.log(req.body)
  res.status(200).send({status: true})
}

module.exports = studentController