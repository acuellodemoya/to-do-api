import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    userId: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({
        unique: true
    })
    username: string

    @Column()
    password: string

    @Column({
        default: true
    })
    isActive: boolean

}
