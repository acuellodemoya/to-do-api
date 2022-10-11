import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
//import { v4 as uuid } from 'uuid'
@Entity()
export class Todo {

    @PrimaryGeneratedColumn('uuid')
    taskId: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({
        default: false
    })
    isCompleted: boolean

    @Column({
        default: true
    })
    isActive: boolean


}
