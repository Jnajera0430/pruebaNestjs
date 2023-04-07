import { Injectable } from '@nestjs/common';
import { Task, tasksStatus } from './tasks.entity';
import {CreateTaskDTO, UpdateTaskDTO} from './DTO/task.dto'

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      tittle: 'Este es un tittle',
      description: "Esta es la descripcion de la tarea",
      status: tasksStatus.PENDING
    },
  ];
  getAllTask() {
    return this.tasks;
  }
  createTask(tittle: String, description: String) {
    const newTask: Task = {
      id: new Date().toISOString(),
      tittle,
      description,
      status: tasksStatus.PENDING
    }
    this.tasks.push(newTask);
    console.log(this.tasks);
    return this.tasks
  }
  upDateTask(id:string, fieldsToUpdate:UpdateTaskDTO) {
    const task:Task = this.tasks.find((task: Task)=>task.id == id);
    const newTask = Object.assign(task, fieldsToUpdate);
    this.tasks = this.tasks.map((task:Task)=>(task.id === id ? newTask : task))
    return this.tasks;
  }
  deleteTask(id: String) {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    return this.tasks;
  }
}
