import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

import { HttpClientService } from '../../http-client.service';

@Component({
  selector: 'app-update-task-form',
  templateUrl: './update-task-form.component.html',
  styleUrls: ['./update-task-form.component.css']
})
export class UpdateTaskFormComponent implements OnChanges {

  @Input() oldTitle: String;
  @Input() oldDescription: String;

  updateTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private httpClientService: HttpClientService, private logger: NGXLogger) { }

  ngOnChanges() {
    this.updateTaskForm.setValue({
      title: this.oldTitle,
      description: this.oldDescription
    });
  }

  onSubmit() {
    // TODO: implement this
    console.log("fake-submitting updated task", this.updateTaskForm.value);
  }

}
