import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../http-client.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  allTasks: Task[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.taskCache.subscribe(tasks => this.allTasks = tasks);
    this.httpClientService.refreshTaskCache();
  }
}
