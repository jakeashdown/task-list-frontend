import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rest-frontend-demo';
  allTasks: any
  allTasksUrl = "http://localhost:8080/task"

  constructor(private http: HttpClient) {}

  taskServiceGetAllTasks() {
    return this.http
      .get<any[]>(this.allTasksUrl)
      .pipe(map(data => data));
  }

  getAllTasks(): void {
    this.taskServiceGetAllTasks()
      .subscribe(
        allTasksFromApi => {
          this.allTasks = allTasksFromApi;
          console.log(this.allTasks);
        }
      )
  }

  ngOnInit() {
    this.getAllTasks();
  }
}
