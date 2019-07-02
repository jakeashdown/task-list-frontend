import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

import { HttpClientService } from '../../http-client.service';
import { Task } from '../../task';

@Component({
  selector: 'app-update-task-form',
  templateUrl: './update-task-form.component.html',
  styleUrls: ['./update-task-form.component.css']
})
export class UpdateTaskFormComponent implements OnChanges {

  @Input() oldTask: Task;

  updateTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private httpClientService: HttpClientService, private logger: NGXLogger) { }

  ngOnChanges() {
    this.updateTaskForm.setValue({
      title: this.oldTask.title,
      description: this.oldTask.description
    });
  }

  onSubmit() {
    this.httpClientService.updateExistingTask(this.updateTaskForm.value, this.oldTask.id)
    .subscribe(
      (response) => this.httpClientService.refreshTaskCache(),
      (error) => this.logger.error('form submission failed', error)
    );
  }

}
