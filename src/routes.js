import { Router } from 'express'
import OngController from './controllers/OngController'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Backend Semana OmniStack 11' })
})

routes.post('/ongs', OngController.store)

export default routes
