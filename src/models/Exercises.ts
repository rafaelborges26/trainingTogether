import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'

import User from './User'

@Entity('exercises')
class Exercises {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    //@ManyToOne(() => User, user => user.exercise)

    @Column()
    name: string; 

    @Column()
    day: string;

    @Column()
    repetition: number;

    @Column()
    charge: number;

    @Column()
    bodypart: string;

    @ManyToOne(() => User, (user: User) => user.id)
    user: User

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Exercises