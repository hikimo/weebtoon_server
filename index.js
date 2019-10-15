const express = require('express')
require('express-group-routes')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.port || 3000 

app.use(bodyParser.json())

// Controllers
const WeebtoonsController = require('./controllers/weebtoon')

// Middlewares

// Group Router
app.group('/api/v1', router => {

  // get weebtoon data
  router.get('/weebtoons', WeebtoonsController.index)
})


app.listen(port, () => console.log(`App running at ${port}`))