const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user

exports.show = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ where: { email, password } }).then( user => {
    if(user) {
      const token = jwt.sign({ id: user.id }, 'teto-foreva', { expiresIn: 60 * 60 })
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