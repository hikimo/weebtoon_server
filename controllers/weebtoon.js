const models = require('../models')
const Manga = models.manga 
const User = models.user
const Fav = models.favorite
const Chapter = models.chapter
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

exports.favorites = (req, res) => {
  Manga.findAll({
    // where: { user_id : req.params.id },
    include: [
      {
        model: User,
        as: 'isFavorite',
        through: {
          model: Fav,
          as: 'favRef',
          where: { user_id: req.params.id }
        }
      },
    ]
  }).then(fav => {
    res.send(fav)
  })
}

exports.showCreation = (req, res) => {
  User.findAll({
    include: [{
      model: Manga
    }]
  }).then(creation => {
    res.send(creation)
  })
}

exports.showCreationChapter = (req, res) => {
  Chapter.findAll({
    where: {manga_id : req.params.id}
  }).then(creation => {
    res.send(creation)
  })
}

exports.store = (req, res) => {
  const { name, cover } = req.body
  const created_by = req.params.id
  Manga.create({
    name, cover, created_by
  }).then(() => {
    res.send({error: false, message: 'success'})
  })
}