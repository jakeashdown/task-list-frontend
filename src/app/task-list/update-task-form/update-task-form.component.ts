import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-task-form',
  templateUrl: './update-task-form.component.html',
  styleUrls: ['./update-task-form.component.css']
})
export class UpdateTaskFormComponent implements OnInit {

  @Input() title: String;
  @Input() description: String;

  constructor() { }

  ngOnInit() {
  }

}
