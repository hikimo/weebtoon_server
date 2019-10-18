const models = require('../models')
const Manga = models.manga 
const User = models.user
const Fav = models.favorite
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
    if(fav.length > 0)
      res.send({error: false, fav})
    else
      res.send({error: true, message: 'No favorite(s) found'})
  })
}

exports.showCreation = (req, res) => {
  User.findAll({
    attributes: {
      exclude: [
        'email', 'password', 'photo', 'createdAt', 'updatedAt'
      ]
    },
    include: [{
      model: Manga,
      where: {
        created_by: req.params.id
      }
    }]
  }).then(creation => {
    if(creation.length > 0)
      res.send({error: false, creation})
    else
      res.send({error: true, message: 'This user have no manga created'})
  })
}

exports.showCreationChapter = (req, res) => {
  Manga.findAll({
    where: {created_by : req.params.id}
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

exports.update = (req, res) => {
  const { name, cover } = req.body
  Manga.update({
    name, cover
  }, {
    where: {
      id: req.params.wId
    }
  }).then(() => {
    res.send({error: false, message: 'success'})
  })
}

exports.delete = (req, res) => {
  Manga.destroy({
    where: {
      id: req.params.wId
    }
  }).then(() => {
    res.send({error: false, message: 'success'})
  })
}