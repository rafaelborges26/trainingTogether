import { Router } from 'express'

import exercisesRouter from './exercises.routes' 

const routes = Router()

routes.use('/exercises', exercisesRouter)

export default routes;