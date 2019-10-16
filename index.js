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
  router.post('/login', AuthController.login)
  router.post('/register', AuthController.store)
  
  // get weebtoon data
  router.get('/weebtoons', authorization, WeebtoonsController.index)
  router.get('/weebtoon/:id/chapters', authorization, ChaptersController.show)
  router.get('/weebtoon/:id/chapter/:iChapter', authorization, ChapterPagesController.show)

  // Weebtoon creation
  router.get('/user/weebtoons', WeebtoonsController.showCreation)
  router.post('/user/:id/weebtoon', WeebtoonsController.store)
  router.put('/user/:id/weebtoon/:wId', WeebtoonsController.update)
  router.delete('/user/:id/weebtoon/:wId', WeebtoonsController.delete)

  // Weebtoon chapter
  router.post('/user/:id/weebtoon/:wId/chapter', ChaptersController.store)
  router.get('/user/:id/weebtoon/:wId/chapters', ChaptersController.showCreation)  

  // Creation chapter
  router.post('/user/:id/weebtoon/:wId/chapter/:cId/image', ChaptersController.storeImg)
  router.delete('/user/:id/weebtoon/:wId/chapter/:cId/image/:iId', ChaptersController.delete)
  
  
  // Favorites API
  router.get('/weebtoon/:id/favorites', authorization, WeebtoonsController.favorites)
})


app.listen(port, () => console.log(`App running at ${port}`))