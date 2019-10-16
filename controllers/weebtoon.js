const models = require('../models')
const Manga = models.manga 
const sequelize = require('sequelize')
const Op = sequelize.Op

exports.index = (req, res) => {
  const name = req.query.name
  if(name) {
    Manga.findAll({
      where: { 
        name: { [Op.like] : `%${name}%` } 
      }
    }).then(mangas => {
      if(mangas.length > 0)
        res.send(mangas)
      else
        res.send({status: 'failed', message: 'There\'s no manga founded using that name'})
    })
  } else {
    Manga.findAll().then(mangas => {
      if(mangas.length > 0)
        res.send(mangas)
      else
        res.send({status: 'failed', message: 'There\'s no manga found'})
    })
  }
}