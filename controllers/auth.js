const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const bcrypt = require('bcrypt')

exports.login = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ attributes:  ['id', 'name', 'email', 'photo', 'password'], where: { email } }).then( user => {
    if(bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id }, 'teto-foreva', { expiresIn: 604800000000 })
      packedData = {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo,
      }
      res.send({
        data: packedData,
        token
      })
    } else {
      res.send({
        error: true,
        message: "Wrong email or password!"
      })
    }
  }).catch(() => res.send({
    error: true,
    message: "Wrong email or password!"
  }))
}

exports.store = (req, res) => {
  const { email, password } = req.body
  User.findOrCreate({
    where: { email },
    defaults: { email, password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)) }
  }).then(([user, created]) => {
    if(created) {
      const token = jwt.sign({ id: user.id }, 'teto-foreva', { expiresIn: 604800000000 })
      res.send({error: false, message: "success", data: user, token})
    } else {
      res.send({error: true, message: "Email is already used", email: user.email})
    }
  })
}
