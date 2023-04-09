import { Body, Controller, Post, Get, Param, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }
    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto): Promise<User> {
        return this.userService.createUser(newUser);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): Promise<User> | Object{
        return this.userService.deleteUser(id);
    }
    @Patch(':id')
    upDateUser(@Param('id') id: string, @Body() newUser: UpdateUserDto): Promise<User> | Object{
        return this.userService.upDateUser(id, newUser); 
    }
}
