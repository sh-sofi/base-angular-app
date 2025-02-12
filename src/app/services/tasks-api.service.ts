import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>('https://my-json-server.typicode.com/andrytskyib/demo/tasks');
  }
}
