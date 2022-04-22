import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listTasks: Task[] = [];

  displayedColumns: string[] = ['usuario', 'nombre','acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks(); 
  }

  loadTasks() {
    this.listTasks = this._taskService.getTask();
    this.dataSource = new MatTableDataSource(this.listTasks);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteSelectedTask(index: number) {
    this._taskService.deleteTask(index);
    this.loadTasks();
  }

}
