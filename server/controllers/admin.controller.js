const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const adminController = {}

adminController.add = async (req, res) => {

}

adminController.login = async (req, res) => {
  console.log(req.body)
  res.status(200).send({status: true})
}

adminController.logout = async (req, res) => {

}

module.exports = adminController