const { PrismaClient } = require('@prisma/client')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

const studentController = {}

studentController.add = async (req, res) => {
  try {
    let existsingUser = await prisma.students.findFirst({
      where: {
        name: req.body.name
      }
    })

    if(existsingUser == null) {
      await prisma.students.create({
        data: {
          name: req.body.name,
          school: req.body.school,
          class: req.body.class,
          password: bcrypt.hashSync(req.body.password, 10),
        },
      });
      res.status(200).send({ status: true });
    } else {
      res.status(400).send({status: "user already exists"})
    }
  } catch (error) {
    console.log(error)
  }
}

studentController.logout = async (req, res) => {

}

studentController.login = async (req, res) => {
  try {
    const user = await prisma.students.findFirst({
      where:{
        name: req.body.username,
      }
    })
    if(user == null) {
      res.status(401).send({status: "incorrect details"})
    } else if(bcrypt.compareSync(req.body.password, user.password)){
      const token = jwt.sign(
        { username: user.name },
        process.env.TOKENSECRET,
        { expiresIn: "2h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax", // 'strict' || 'lax'
        secure: false, // TODO Enforce HTTPS in production
      });
      res.status(200).send({status: true})
    } else {
      res.status(401).send({status: "incorrect details"})
    }
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