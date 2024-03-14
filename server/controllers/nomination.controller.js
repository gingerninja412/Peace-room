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
        Votes: []
      }
    })
    res.status(200).send("working")
  } catch (error) {
    console.log(error)
  }

}

nominationController.upvote = async (req, res) => {
  try {
    console.log(req.user)
    await prisma.nominations.update({
      where: {
        id: parseInt(req.params.nominationId)
      },
      data: {
        Votes: {push: req.user}
      }
    })
    res.status(200).send("working")
  } catch (error) {
    console.log(error)
  }
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
  try {
    await prisma.nominations.delete({
      where: {
        id: parseInt(req.params.nominationId)
      }
    })
    res.status(200).send({status: true})
  } catch (error) {
    console.log(error)
  }
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

nominationController.getRandom = async (req, res) => {
  try {
    const nominations = await prisma.nominations.findMany({
      where: {
        approved: true,
        NOT: {
          Votes: {has: req.user}
        }
      }
    })
    console.log();
    res
      .status(200)
      .send(nominations[Math.round(Math.random() * (nominations.length - 1))]);
  } catch (error) {
    console.log(error)
  }
}

module.exports = nominationController