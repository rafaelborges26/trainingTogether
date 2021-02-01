import Exercises from '../models/Exercises'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Exercises)
class ExercisesRepositories extends Repository<Exercises> {

}

export default ExercisesRepositories