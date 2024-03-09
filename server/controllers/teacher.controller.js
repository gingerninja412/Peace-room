const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt")
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')

const secret = new TextEncoder().encode(process.env.TOKENKEY);
const alg = "HS256";

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
    let user = await prisma.teachers.findFirst({
      where: {
        email: req.body.email
      }
    })
    if(user != null && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ username: user.email }, process.env.TOKENSECRET, {expiresIn: "2h"});
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax", // 'strict' || 'lax'
        secure: false, // TODO Enforce HTTPS in production
      });
      console.log(user.email)
      res.status(200).send({status: true})
    } else {
      res.status(401).send("unauthorised")
    }
  } catch (error) {
    console.log(error)
  }
}

teacherController.getSchools = async (req, res) => {
  try {
    const schools = await prisma.teachers.findMany({
      select: {
        School: true
      },
      distinct: ["School"]
    })
    res.status(200).send(schools)
  } catch (error) {
    console.log(error)
  }
}

teacherController.addClass = async (req, res) => {
  try {
    const teacher = await prisma.teachers.findFirst({
      where:{
        email: req.user
      }
    })
    await prisma.teacherClasses.create({
      data: {
        Teacher: req.user,
        Class: req.body.class,
        school: teacher.School
      }
    })
    res.status(200).send({status: 200})
  } catch (error) {
    console.log(error)
  }
}

teacherController.getClass = async (req, res) => {
  try {
    const classes = await prisma.teacherClasses.findMany({
      where: {
        Teacher: req.user
      }
    })
    res.status(200).send(classes)
  } catch (error) {
    
  }
}

module.exports = teacherController