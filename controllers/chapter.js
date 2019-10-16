const models = require('../models')
const Chapter = models.chapter 

exports.show = (req, res) => {
  Chapter.findAll({
    where: { manga_id: req.params.id }
  }).then(chapter => {
    if(chapter.length >= 1)
      res.send(chapter)
    else 
      res.send({error: true, message: 'Chapter(s) not found'})
  })
} 

exports.store = (req, res) => {
  const { title, img } = req.body
  const wId = req.params.wId
  Chapter.create({
    title, img, manga_id : wId
  }).then(() => res.send({error: false, message: "Success"}))
}

exports.showCreation = (req, res) => {
  Chapter.findAll({
    where: { manga_id: req.params.wId }
  }).then(chapter => {
    if(chapter.length >= 1)
      res.send(chapter)
    else 
      res.send({error: true, message: 'Chapter(s) not found'})
  })
} 