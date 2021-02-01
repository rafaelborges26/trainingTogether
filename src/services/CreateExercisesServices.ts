import Exercises from '../models/Exercises'

import { getCustomRepository, TransactionRepository } from 'typeorm'

import ExercisesRepository from '../repositories/ExercisesRepositories'

interface Request {
        name: string,
        day: number,
        repetition: number,
        charge: number,
        bodypart: string        
}

class CreateExercisesService {
    public async execute({ name, day, repetition, charge, bodypart}:Request): Promise<Exercises> {
        const exercisesRepository = getCustomRepository(ExercisesRepository)
        
        const exercise = exercisesRepository.create({
            name,
            day,
            repetition,
            charge,
            bodypart,
            user: '123123'
        })
        console.log(exercise)
        exercisesRepository.save(exercise)

        return exercise
        //const 
    }
}

export default CreateExercisesService