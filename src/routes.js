import { Router } from 'express'
import OngsController from './controllers/OngsController'
import IncidentsController from './controllers/IncidentsController'
import ProfileController from './controllers/ProfileController'
import SessionController from './controllers/SessionController'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Backend Semana OmniStack 11' })
})

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.create)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/profile', ProfileController.index)

export default routes
