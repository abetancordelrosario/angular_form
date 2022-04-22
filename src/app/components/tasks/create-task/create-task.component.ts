import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import { TasksComponent } from '../tasks.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  tasks: Task[] = [];


  form: FormGroup;

  constructor(private fb: FormBuilder, private _task: TaskService, private router: Router, private activate: ActivatedRoute) { 
    let id = this.activate.snapshot.params['id']
    var name, description = ''
    this.loadTasks()
    if(id !== undefined) {
      name = this.tasks[id].name
      description = this.tasks[id].description
      this.deleteSpecificTask(id)
    }
    this.form = this.fb.group({
      name: [name, Validators.required],
      description: [description, Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  addtask() {
    const tas: Task = {
      name: this.form.value.name,
      description: this.form.value.description
    }
    this._task.addTask(tas);
    this.router.navigate(['/tasks'])
  }

  loadTasks() {
    this.tasks = this._task.getTask();
  }

  deleteSpecificTask(index: number) {
    this._task.deleteTask(index);
  }

}
