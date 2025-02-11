import { Component, OnInit } from '@angular/core';
import { ITask, Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  standalone: false, //
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  public tasks: ITask[] = [];
  public selectedTask: ITask | undefined;

  public ngOnInit(): void {
    this.tasks.push(
      new Task('Task 1', 'test...'),
      new Task('Task 2', 'test...')
    )
  }

  public selectTask(task: ITask): void {
    this.selectedTask = task;
  }

  public addTask(task: ITask): void {
    this.tasks.push(task);
  }
}
