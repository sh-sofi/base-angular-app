import { Component, EventEmitter, Output } from '@angular/core';
import { ITask, Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  public newTask: ITask = new Task('', '');

  @Output() private onTaskAdded: EventEmitter<ITask> = new EventEmitter<ITask>();

  public addTask(): void {
    this.onTaskAdded.emit(this.newTask);

    this.newTask = new Task('', '');
  }
}
