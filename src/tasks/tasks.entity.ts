
export enum tasksStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
  }
  
  export class Task {
    id: String;
    tittle: String;
    description: String;
    status: tasksStatus;
  }
  