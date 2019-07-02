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
    console.log('TaskListComponent: initialising');
    this.httpClientService.taskCache.subscribe(tasks => {
      console.log('TaskListComponent: task list refreshed');
      this.allTasks = tasks;
    })
    this.httpClientService.refreshTaskCache();
  }
}
