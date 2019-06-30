import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class AppService {

  protected allTasksUrl: string = 'http://localhost:8080/task';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

  // Query the REST API for a list of all tasks
  getAllTasks() {
    return this.http
      .get<any[]>(this.allTasksUrl)
      .pipe(map(data => data));
  }

}
