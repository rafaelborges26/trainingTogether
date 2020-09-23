import { Router } from 'express'

import trainingsRouter from './trainings.routes' 

const routes = Router()

routes.use('/trainings', trainingsRouter)

export default routes;