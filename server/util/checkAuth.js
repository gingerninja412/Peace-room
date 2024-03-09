
const checkAuth = async (req, res) => {
  try {
    res.status(200).send({status: true})
  } catch (error) {
    console.log(error)
  }
}

module.exports = checkAuth