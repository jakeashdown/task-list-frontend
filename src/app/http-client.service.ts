import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';

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
    console.log('HttpClientService: refreshing task cache');
    this.http
      .get<Task[]>(this.host + this.taskPathSegment)
      .subscribe(tasks => {
        console.log('HttpClientService: publishing cache update');
        this.taskCache.next(tasks);
      });
  }

  postNewTask(newTask: NewTask): Observable<any> {
    console.log('HttpClientService: posting new task [' + newTask + ']');
    return this.http.post(
      this.host + this.taskPathSegment,
      {title: newTask.title, description: newTask.description}
    );
  }

}
