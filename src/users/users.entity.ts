import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string
    @Column({ unique: true })
    username: string
    @Column()
    password: string
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
    @Column({ nullable: true })
    authStrategy: string
}