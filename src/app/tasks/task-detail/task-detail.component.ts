import { Component, Input } from '@angular/core';
import { ITask } from '../task.model';

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  @Input() public selectedTask: ITask | undefined;
}
