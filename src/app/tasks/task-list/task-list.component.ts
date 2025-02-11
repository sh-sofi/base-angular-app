import { Component, OnInit } from '@angular/core';
import { ITask, Task } from '../task.model';
import { Observable } from 'rxjs';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: false, //
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  public tasks$: Observable<ITask[]> = this.tasksService.tasks$;
  public selectedTask: ITask | undefined;

  constructor( private tasksService: TasksService) {}

  public ngOnInit(): void {
    this.tasksService.setTasks([
      new Task('Task 1', 'test...'),
      new Task('Task 2', 'test...')
    ])
  }

  public selectTask(task: ITask): void {
    this.selectedTask = task;
  }
}
