const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt")
const prisma = new PrismaClient()

const teacherController = {}

teacherController.add = async (req, res) => {
  try {
    console.log(req.body)
    await prisma.teachers.create({
      data: {
        name: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        School: req.body.school
      }
    })
    res.status(200).send({status: true})
  } catch (error) {
    console.log(error)
  }
}

teacherController.logout = async (req, res) => {

}

teacherController.login = async (req, res) => {
  try {
    let user = await prisma.teachers.findMany({
      where: {
        email: req.body.email
      }
    })
    if(user != null && bcrypt.compareSync(req.body.password, user[0].password)) {
      res.status(200).send({status: true})
    } else {
      res.status(401).send("unauthorised")
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = teacherController