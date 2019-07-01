import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NewTask } from './new-task'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  protected allTasksUrl: string = 'http://localhost:8080/task';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

  getAllTasks() {
    return this.http
      .get<any[]>(this.allTasksUrl)
      .pipe(map(data => data));
  }

  postNewTask(newTask: NewTask){
    return this.http.post(this.allTasksUrl, {"title": newTask.title, "description": newTask.description})
  }

}
