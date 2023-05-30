import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_profile')
export class Profile {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string
    @Column()
    nombres: string
    @Column()
    apellidos: string
    @Column({nullable: true})
    edad: number

    

}