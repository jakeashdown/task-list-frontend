import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { HttpClientService } from '../http-client.service';
import { NewTask } from '../new-task';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent {

  newTask = new NewTask(null, null);

  constructor(private httpClientService: HttpClientService, private logger: NGXLogger) { }

  onSubmit() {
    this.httpClientService.createNewTask(this.newTask)
    .subscribe(
      (response) => this.httpClientService.refreshTaskCache(),
      (error) => this.logger.error('error creating task', this.newTask, error)
    );
  }
}
