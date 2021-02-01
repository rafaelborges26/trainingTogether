import { request, response, Router } from 'express'
import { uuid } from 'uuidv4'
import CreateExercisesService from '../services/CreateExercisesServices'

interface Itraining {
    id: string
    exercise: string,
    repetition: number,
    charge: number
}

const exercisesRouter = Router()

const trainings = ['000', 'abdominal', 10, 15]

exercisesRouter.post('/', async (request, response) => {
    const { name, day, repetition, charge, bodypart } = request.body

    const exercises = {
        name,
        day,
        repetition,
        charge,
        bodypart
    }
    
    const createTransaction = new CreateExercisesService()

    const exercise = await createTransaction.execute({name, day, repetition, charge, bodypart})
    //exercises.push(training)

    return response.json(exercises)
})

exercisesRouter.get('/', (request, response) => {

    return response.json(trainings)
})


export default exercisesRouter
