const express = require('express')
require('express-group-routes')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.port || 3000 

app.use(bodyParser.json())

// Controllers
const WeebtoonsController = require('./controllers/weebtoon')
const ChaptersController = require('./controllers/chapter')
const ChapterPagesController = require("./controllers/chapterPages")
const AuthController = require('./controllers/auth') 

// Middlewares
const { authorization } = require('./middlewares/main')

// Group Router
app.group('/api/v1', router => {

  // login API
  router.post('/login', AuthController.show)
  
  // get weebtoon data
  router.get('/weebtoons', authorization, WeebtoonsController.index)
  router.get('/weebtoon/:id/chapters', authorization, ChaptersController.show)
  router.get('/weebtoon/:id/chapter/:iChapter', authorization, ChapterPagesController.show)
})


app.listen(port, () => console.log(`App running at ${port}`))