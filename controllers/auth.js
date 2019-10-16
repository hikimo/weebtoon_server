const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const bcrypt = require('bcrypt')

exports.show = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ where: { email } }).then( user => {
    if(bcrypt.compareSync(password, user.password)) {
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