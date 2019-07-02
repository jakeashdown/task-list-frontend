import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
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

  constructor(private http: HttpClient, private logger: NGXLogger) {
    this.taskCache = new Subject();
  }

  refreshTaskCache(): void {
    this.logger.info('refreshing task cache');
    this.http
      .get<Task[]>(this.host + this.taskPathSegment)
      .subscribe(tasks => {
        this.logger.info('publishing cache update');
        this.taskCache.next(tasks);
      });
  }

  postNewTask(newTask: NewTask): Observable<any> {
    this.logger.info('posting new task', newTask);
    return this.http.post(
      this.host + this.taskPathSegment,
      {title: newTask.title, description: newTask.description}
    );
  }

}
