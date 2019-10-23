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
  User.findAll({
    where: { id : req.params.id },
    include: [
      {
        model: Manga,
      },
    ]
  }).then(fav => { 
    if(fav[0].mangas.length > 0)
      res.send({error: false, data: fav[0].mangas})
    else
      res.send({error: true, message: 'No favorite(s)'})
  })
}

exports.addFavorite = (req, res) => {
  Fav.findOrCreate({
    where: { user_id: req.params.id, manga_id: req.params.wId },
    defaults: { user_id: req.params.id, manga_id: req.params.wId }
  }).then(([favorite, created]) => {
    if(created) {
      res.send({error: false, message: "success", data: favorite, token})
    } else {
      res.send({error: true, message: "Email is already used", email: favorite.email})
    }
  })
}

exports.removeFavorite = (req, res) => {
  Fav.destroy({
    where: {
      user_id: req.params.id,
      manga_id: req.params.wId
    }
  }).then(() => {
    res.send({error: false, message: 'success'})
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