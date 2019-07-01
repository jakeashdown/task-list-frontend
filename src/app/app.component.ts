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
        allTasksFromApi => { this.allTasks = allTasksFromApi; }
      )
  }

  ngOnInit() {
    this.getAllTasks();
  }
}
