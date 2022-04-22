import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  listUsuarios: Task[] = [
    {name: "DAW2", description: 'Terminar activadad antes de la semana que viene'},
    {name: "Deporte", description: 'Ir a hacer bicicleta con mi tio David'}
  ];

  constructor() { }

  getTask() {
    return this.listUsuarios.slice();
  }

  deleteTask(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  addTask(task: Task) {
    this.listUsuarios.unshift(task);
  }
}
