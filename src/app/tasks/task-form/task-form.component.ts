import { Component, EventEmitter, Output } from '@angular/core';
import { ITask, Task } from '../task.model';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  public newTask: ITask = new Task('', '');

  constructor(private tasksService: TasksService, private router: Router) {}

  public addTask(): void {
    this.tasksService.addTask(this.newTask);

    this.newTask = new Task('', '');

    this.goBack();
  }

  public goBack(): void {
    this.router.navigate(['/']);
  }
}
