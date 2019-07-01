import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  allTasks: any;

  constructor(private httpClientService: HttpClientService) {
  }

  getAllTasks(): void {
    this.httpClientService.getAllTasks()
      .subscribe(
        allTasksFromApi => { this.allTasks = allTasksFromApi; }
      );
  }

  ngOnInit() {
    this.getAllTasks();
  }
}
