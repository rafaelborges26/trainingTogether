import { request, response, Router } from 'express'
import { uuid } from 'uuidv4'

interface Itraining {
    id: string
    exercise: string,
    repetition: number,
    charge: number
}

const trainingsRouter = Router()

const trainings = ['000', 'abdominal', 10, 15]

trainingsRouter.post('/',(request, response) => {
    const { exercise, repetition, charge } = request.body

    const training = {
        id: uuid(),
        exercise,
        repetition,
        charge
    }
    
    //trainings.push(training)

    return response.json(training)
})

trainingsRouter.get('/', (request, response) => {

    return response.json(trainings)
})


export default trainingsRouter
