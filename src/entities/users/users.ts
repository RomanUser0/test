import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    password: string

    @Column({unique: true})
    email: string

    @Column() 
    createAt: Date;
}