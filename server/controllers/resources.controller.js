
const resourceController = {}

const pathToDownloadsFolder = __dirname + '/../downloads/'

resourceController.lessonOne = async (req, res) => {
  res.download(pathToDownloadsFolder + 'PeaceRoomLessonPlan1TheDebate2022.doc', "The Debate.doc", function (err){
    if(err) {
      console.log(err)
      res.status(400).send("didn't work")
    } else {
      console.log("all good")
    }
  })
}

resourceController.lessonTwo = async (req, res) => {
  res.download(pathToDownloadsFolder + 'PeaceRoomLessonPlan2Uploading2022.doc', "Uploading.doc", function (err){
    if(err) {
      console.log(err)
      res.status(400).send("didn't work")
    } else {
      console.log("all good")
    }
  })
}

resourceController.together = async (req, res) => {
  res.download(pathToDownloadsFolder + 'PeaceRoomLessonPlans1And2Together2022.doc', "Peace room one and two.doc", function (err){
    if(err) {
      console.log(err)
      res.status(400).send("didn't work")
    } else {
      console.log("all good")
    }
  })
}

resourceController.biography = async (req, res) => {
  res.download(pathToDownloadsFolder + 'ThePeaceRoomBiographyProForma.docx', "Biography.docx", function (err){
    if(err) {
      console.log(err)
      res.status(400).send("didn't work")
    } else {
      console.log("all good")
    }
  })
}

module.exports = resourceController