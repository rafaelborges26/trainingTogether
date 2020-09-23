import { Router } from 'express'
import { uuid } from 'uuidv4'

const trainingsRouter = Router()

const trainings = []

trainingsRouter.post('/',(request, response) => {
    const { exercise, repetition, charge } = request.body

    const training = {
        id: uuid(),
        exercise,
        repetition,
        charge
    }
    
    trainings.push(training)

    return response.json(training)

})


export default trainingsRouter
