const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const bcrypt = require('bcrypt')

exports.login = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ where: { email } }).then( user => {
    if(bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id }, 'teto-foreva', { expiresIn: 604800000000 })
      res.send({
        user,
        token
      })
    } else {
      res.send({
        error: true,
        message: "Wrong email or password!"
      })
    }
  })
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