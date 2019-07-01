import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SafeHtml } from '@angular/platform-browser';
import { NewTask } from './new-task';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  protected host = 'http://localhost:8080';
  protected taskPathSegment = '/task';

  constructor(private http: HttpClient) {}

  getAllTasks() {
    console.log('HttpClientService: getting list of all tasks');
    return this.http
      .get<any[]>(this.host + this.taskPathSegment)
      .pipe(map(data => data));
  }

  postNewTask(newTask: NewTask) {
    console.log('HttpClientService: posting new task [' + newTask + ']');
    return this.http.post(
      this.host + this.taskPathSegment,
      {'title': newTask.title, 'description': newTask.description}
    );
  }

}
