import { Component, EventEmitter, Output } from '@angular/core';
import { ITask, Task } from '../task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  public newTask: ITask = new Task('', '');

  constructor(private tasksService: TasksService) {}

  public addTask(): void {
    this.tasksService.addTask(this.newTask);

    this.newTask = new Task('', '');
  }
}
