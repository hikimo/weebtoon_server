const models = require('../models')
const Manga = models.manga 
const Fav = models.favorites
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

// exports.favorites = (req, res) => {
//   Fav.findAll({
//     where: { user_id : req.params.id }
//   }).then(fav => {
//     res.send(fav)
//     if(fav.length > 0) {
//       Manga.findAll({
//         where: { id: fav.manga_id }
//       }).then(manga => res.send({error: false, data: manga}))
//     } else {
//       res.send({error: true, message: 'There\'s no favorite manga(s) found'})
//     }
//   })
// }