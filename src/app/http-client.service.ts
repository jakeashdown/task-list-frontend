import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { NewTask } from './new-task';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private host = 'http://localhost:8080';
  private taskPathSegment = '/task';

  taskCache: Subject<Task[]>

  constructor(private http: HttpClient) {
    this.taskCache = new Subject();
  }

  refreshTaskCache(): void {
    console.log('HttpClientService: getting list of all tasks');
    this.http
      .get<any[]>(this.host + this.taskPathSegment)
      .pipe(map(data =>
        data.map(task => new Task(task.id, task.title, task.description))
      )).subscribe(tasks =>
        { this.taskCache.next(tasks); }
      );
  }

  postNewTask(newTask: NewTask) {
    console.log('HttpClientService: posting new task [' + newTask + ']');
    return this.http.post(
      this.host + this.taskPathSegment,
      {'title': newTask.title, 'description': newTask.description}
    );
  }

}
