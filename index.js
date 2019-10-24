const express = require('express')
require('express-group-routes')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000 

app.use(bodyParser.json())

// Controllers
const WeebtoonsController = require('./controllers/weebtoon')
const ChaptersController = require('./controllers/chapter')
const ChapterPagesController = require("./controllers/chapterPages")
const AuthController = require('./controllers/auth') 

// Middlewares
const { authorization } = require('./middlewares/main')

app.get('/', (req, res) => res.send({message: 'Hello World!'}))
// Group Router
app.group('/api/v1', router => {

  // login API
  router.post('/login', AuthController.login)
  router.post('/register', AuthController.store)

  // user API
  router.put('/user/:id', authorization, AuthController.update)
  
  // get weebtoon data
  router.get('/weebtoons', WeebtoonsController.index)
  router.get('/weebtoon/:id/chapters', ChaptersController.show)
  router.get('/weebtoon/:id/chapter/:iChapter', ChapterPagesController.show)

  // Weebtoon creation
  router.get('/user/:id/weebtoons', authorization, WeebtoonsController.showCreation)
  router.post('/user/:id/weebtoon', authorization, WeebtoonsController.store)
  router.put('/user/:id/weebtoon/:wId', authorization, WeebtoonsController.update)
  router.delete('/user/:id/weebtoon/:wId', authorization, WeebtoonsController.delete)

  // Weebtoon chapter
  router.post('/user/:id/weebtoon/:wId/chapter', authorization, ChaptersController.store)
  router.get('/user/:id/weebtoon/:wId/chapters', authorization, ChaptersController.showCreation)  

  // Creation chapter
  router.post('/user/:id/weebtoon/:wId/chapter/:cId/image', authorization, ChaptersController.storeImg)
  router.delete('/user/:id/weebtoon/:wId/chapter/:cId/image/:iId', authorization, ChaptersController.delete)
  
  // Favorites API
  router.get('/weebtoon/:id/favorites', WeebtoonsController.favorites)
  router.post('/weebtoon/:id/favorite/:wId', authorization, WeebtoonsController.addFavorite)
  router.delete('/weebtoon/:id/favorite/:wId', authorization, WeebtoonsController.removeFavorite)
})


app.listen(port, () => console.log(`App running at ${port}`))