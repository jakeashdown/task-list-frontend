import { Component, OnInit } from '@angular/core';
import { NewTask } from '../new-task'
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {

  newTask = new NewTask(null, null)

  constructor(private HttpClientService: HttpClientService) { }

  ngOnInit() {}

  onSubmit() {
    this.HttpClientService.postNewTask(this.newTask).subscribe(
      (response) => { console.log('Response from post data is ', response); response; },
      (error) => { console.log('Error posting new task [' + this.newTask + ']', error) }
    )
  }
}
