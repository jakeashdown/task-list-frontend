import { Component, OnInit } from '@angular/core';
import { NewTask } from '../new-task'
import { AppService } from '../app.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {

  submitted = false;
  newTask = new NewTask(null, null)

  onSubmit() {
    this.appService.postNewTask(this.newTask).subscribe(
      (response) => { console.log('Response from post data is ', response); response; },
      (error) => { console.log('Error posting new task [' + this.newTask + ']', error) }
    )
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
}
