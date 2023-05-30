import { User } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn('uuid', {name: 'id'})
    id: string
    @Column()
    title: string
    @Column()
    content: string

    //authorId:

    @ManyToOne(()=> User, user => user.id)
    authorId: string
}