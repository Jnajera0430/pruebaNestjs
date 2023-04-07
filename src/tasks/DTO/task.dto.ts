import { tasksStatus } from '../tasks.entity';

export class CreateTaskDTO{
    tittle: string
    description: string
}

export class UpdateTaskDTO{
    tittle?: string
    description?: string
    status?: tasksStatus
}