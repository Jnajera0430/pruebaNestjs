import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Profile } from './profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>
    ) { }

    async createUser(user: CreateUserDto) {
        const userFound = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        })
        if (userFound) return new HttpException('username is already', HttpStatus.CONFLICT)
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    getUsers() {
        return this.userRepository.find();
    }

    async getUser(id: string) {
        const user = await this.userRepository.findOne({
            where: {
                id
            }
        })
        if (!user) return new HttpException('user not found', HttpStatus.NOT_FOUND);
        return user;
    }

    async deleteUser(id: string) {
        const userFound = await this.userRepository.findOne({
            where: {
                id
            }
        });

        if (!userFound) return new HttpException('user not Found', HttpStatus.NOT_FOUND);
        return this.userRepository.delete({ id });
    }

    async upDateUser(id: string, upDateUser: UpdateUserDto) {
        const findUser = await this.userRepository.findOne({
            where: {
                id
            }
        })
        if (!findUser) return {
            msg: 'Usuario no encontrado.'
        }
        return this.userRepository.update({ id }, upDateUser);
    }

    async createProfile(idUser: string, profileUser: CreateProfileDto) {
        console.log(idUser);
        
        const userFound = await this.userRepository.findOne({
            where: {
                id: idUser
            }
        });

        if (!userFound) return new HttpException('user not found', HttpStatus.NOT_FOUND);

        const newProfile = this.profileRepository.create(profileUser);
        const saveProfile = await this.profileRepository.save(newProfile);

        userFound.profile = saveProfile;

        return this.userRepository.save(userFound);
    }
}
