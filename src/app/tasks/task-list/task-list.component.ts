import { Component, OnInit } from '@angular/core';
import { ITask, Task } from '../task.model';
import { Observable } from 'rxjs';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: false, //
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  //public tasks$: Observable<ITask[]> = this.tasksService!.tasks$; (IERR)
  public tasks$: Observable<ITask[]> | undefined;
  public selectedTask: ITask | undefined;

  constructor(
    private tasksService: TasksService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    //Added due to initialize error (IERR)
    this.tasks$ = this.tasksService.tasks$; //(IERR)
    this.tasksService.setTasks([
      new Task('Task 1', 'test...'),
      new Task('Task 2', 'test...')
    ])
  }

  public selectTask(task: ITask): void {
    this.selectedTask = task;
  }

  public navigateToCreate(): void {
    this.router.navigate(['task-create']);
  }

  public navigateToTask(id: string): void {
    this.router.navigate(['task', id]);
  }
}
