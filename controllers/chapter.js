const models = require('../models')
const Chapter = models.chapter 

exports.show = (req, res) => {
  Chapter.findAll({
    where: { manga_id: req.params.id }
  }).then(chapter => {
    res.send(chapter)
  })
} 