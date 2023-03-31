import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    helloWord(){
        return 'Hello World'
    }
}
