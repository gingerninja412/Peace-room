const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

const studentController = {}

studentController.add = async (req, res) => {
  try {
    await prisma.students.create({
      data: {
        name: req.body.name,
        school: req.body.school,
        class: req.body.class,
        password: bcrypt.hashSync(req.body.password, 10)
      }
    })
    res.status(200).send({status: true})
  } catch (error) {
    console.log(error)
  }
}

studentController.logout = async (req, res) => {

}

studentController.login = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
  }
}

studentController.getClasses = async (req, res) => {
  try {
    const classes = await prisma.teacherClasses.findMany({
      where: {
        school: req.params.school
      }, 
      select: {
        Class: true
      }
    })
    res.status(200).send(classes)
  } catch (error) {
    console.log(error)
  }
}

module.exports = studentController