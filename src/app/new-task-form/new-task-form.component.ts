import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../http-client.service';
import { NewTask } from '../new-task';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {

  newTask = new NewTask(null, null);

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {}

  onSubmit() {
    console.log('NewTaskFormComponent: submitting new task [' + this.newTask + ']');
    this.httpClientService.postNewTask(this.newTask).subscribe(
      (response) => {
        console.log('NewTaskFormComponent: refreshing cache');
        this.httpClientService.refreshTaskCache();
      },
      (error) => console.log('NewTaskFormComponent: error response', error)
    );
  }
}
