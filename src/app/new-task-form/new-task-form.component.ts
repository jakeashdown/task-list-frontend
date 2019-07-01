import { Component, OnInit } from '@angular/core';
import { NewTask } from '../new-task';
import { HttpClientService } from '../http-client.service';

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
    console.log('NewTaskFormComponent: submitting form');
    this.httpClientService.postNewTask(this.newTask).subscribe(
      (response) => { },
      (error) => {
        console.log('NewTaskFormComponent: error response from posting new task [' + this.newTask + ']', error);
      }
    );
  }
}
