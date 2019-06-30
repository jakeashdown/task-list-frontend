import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rest-frontend-demo';
  allTasks: any

  constructor(private appService: AppService) {}

  getAllTasks(): void {
    this.appService.getAllTasks()
      .subscribe(
        allTasksFromApi => {
          this.allTasks = allTasksFromApi;
          console.log(this.allTasks);
        }
      )
  }

  postNewTask(): any {
    this.appService.postTask().subscribe(
      (response) => { console.log('response from post data is ', response); response; },
      (error) => { console.log('error during post is ', error) }
    )
  }

  ngOnInit() {
    this.getAllTasks();
  }
}
