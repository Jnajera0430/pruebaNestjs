import { Controller, Get,Post,Body,Put,Param,Delete } from '@nestjs/common';
import {TasksService} from './tasks.service'
import {CreateTaskDTO, UpdateTaskDTO} from './DTO/task.dto'
@Controller('tasks')
export class TasksController {
    
    constructor( private taskService: TasksService){}
    @Get()
    getAllTasks(){
        return this.taskService.getAllTask();
    }
    @Post()
    postCreateTask(@Body() newTask:CreateTaskDTO){
        const {tittle, description} = newTask;
        if(!tittle ||!description)return 'Datos invalidos'
        return this.taskService.createTask(tittle,description); 
    }
    @Delete(':id')
    deleteTask(@Param('id') id: string){
        return this.taskService.deleteTask(id)
    }
    @Put(':id')
    putUpdateTask(@Param('id') id: string, @Body() fieldsToUpdate: UpdateTaskDTO){
        return this.taskService.upDateTask(id, fieldsToUpdate);
    }

}