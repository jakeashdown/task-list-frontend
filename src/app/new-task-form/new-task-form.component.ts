import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { HttpClientService } from '../http-client.service';
import { NewTask } from '../new-task';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {

  newTask = new NewTask(null, null);

  constructor(private httpClientService: HttpClientService, private logger: NGXLogger) { }

  ngOnInit() {}

  onSubmit() {
    console.log('NewTaskFormComponent: submitting new task [' + this.newTask + ']');
    this.httpClientService.postNewTask(this.newTask).subscribe(
      (response) => this.httpClientService.refreshTaskCache(),
      (error) => this.logger.error('form submission failed', error)
    );
  }
}
