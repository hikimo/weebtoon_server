const models = require('../models')
const Chapter = models.chapter
const Page = models.chapter_page

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

exports.store = (req, res) => {
  const { title, img } = req.body
  const wId = req.params.wId
  Chapter.create({
    title, img, manga_id : wId
  }).then(() => res.send({error: false, message: "Success"}))
}

exports.delete = (req, res) => {
  Chapter.destroy({
    where: { id: req.params.wId }
  }).then(() => {
    res.send({error: false, message: 'success'})
  })
} 

exports.storeImg = (req, res) => {
  const { page, name, img } = req.body
  const manga_id = (req.params.wId)
  const chapter_id = req.params.cId
  Page.create({
    page, name, manga_id, img, chapter_id
  }).then(() => {
    res.send({error: false, message: "success"})
  })
}

exports.delete = (req, res) => {
  Page.destroy({
    where: { id: req.params.iId }
  }).then(() => {
    res.send({error: false, message: 'success'})
  })
} 