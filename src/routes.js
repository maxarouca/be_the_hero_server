import { Router } from 'express'
// import SearchController from './controllers/SearchController'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Backend Semana OmniStack 11' })
})

// routes.get('/search', SearchController.index)

export default routes
