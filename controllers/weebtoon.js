const models = require('../models')
const Manga = models.manga 

exports.index = (req, res) => {
  Manga.findAll().then(mangas => {
    res.send({mangas})
  })
}

