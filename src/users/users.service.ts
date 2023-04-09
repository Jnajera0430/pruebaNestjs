import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    createUser(user: CreateUserDto){
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    getUsers(){
       return this.userRepository.find(); 
    }

    getUser(id: string){
        return this.userRepository.findOne({
            where: {
                id
            }
        })
    }

    deleteUser(id:string){
        return this.userRepository.delete({id});
    }

    upDateUser(id: string, upDateUser: UpdateUserDto){
        const findUser: Promise<User> = this.userRepository.findOne({
            where: {
                id
            }
        })
        if(!findUser)return {
            msg: 'Usuario no encontrado.'
        }
        return this.userRepository.update({id}, upDateUser);
    }
}
