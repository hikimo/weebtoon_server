const models = require('../models')
const Pages = models.chapter_page

exports.show = (req, res) => {
  Pages.findAll({
    where: { manga_id: req.params.id, chapter_id: req.params.iChapter }
  }).then(chapter => {
    if(chapter.length > 0)
      res.send(chapter)
    else
      res.send({error: true, message: 'Chapter page(s) not found'})
  })
} 