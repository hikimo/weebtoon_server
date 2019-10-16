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