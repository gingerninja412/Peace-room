const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const nominationController = {}

nominationController.add = async (req, res) => {
  try {
    console.log(req.user)
    await prisma.nominations.create({
      data: {
        nominee: req.body.name,
        content: req.body.reason,
        author: req.user,
        approved: false,
        votes: 0
      }
    })
    res.status(200).send("working")
  } catch (error) {
    console.log(error)
  }

}

nominationController.upvote = async (req, res) => {

}

nominationController.delete = async (req, res) => {

}

nominationController.approve = async (req, res) => {
  try {
    await prisma.nominations.update({
      where: {
        id: parseInt(req.params.nominationId),
      },
      data: {
        approved: true
      }
    });
    res.status(200).send({status: true})
  } catch (error) {
    console.log(error)
  }
}

nominationController.disapprove = async (req, res) => {

}

nominationController.getByClass = async (req, res) => {
  try {
    let classList = await prisma.students.findMany({
      where: {
        class: req.params.class
      },
      select: {
        name: true
      }
    })

    classList = classList.map((item) => {
      return item.name;
    });

    const nominations = await prisma.nominations.findMany({
      where: {
        author: {
          in: classList
        },
        approved: false
      }
    })

    res.status(200).send(nominations)
  } catch (error) {
    console.log(error)
  }
}

module.exports = nominationController