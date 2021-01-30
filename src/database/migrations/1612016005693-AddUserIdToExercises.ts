import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class AddUserIdToExercises1612016005693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('exercises', new TableColumn({
            name: 'user_id',
            type: 'uuid',
            isNullable: true
        })
        )
        
        await queryRunner.createForeignKey('exercises', new TableForeignKey({
            name: 'UserId',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onUpdate: 'SET NULL',
            onDelete: 'CASCADE'
        }))
        
    }

    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('exercises', 'UserId')

        await queryRunner.dropColumn('exercises', 'user_id')
    }

}
