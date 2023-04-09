import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {

    constructor( private userService: UsersService){}
    @Get()
    getAllUsers(): Promise<User[]>{
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string): Promise<User>{
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto):Promise<User>{
        return this.userService.createUser(newUser);
    }
}
