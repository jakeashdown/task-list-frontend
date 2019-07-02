import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { HttpClientService } from './http-client.service';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskFormComponent } from './task-list/update-task-form/update-task-form.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskFormComponent,
    TaskListComponent,
    UpdateTaskFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
    FormsModule
  ],
  providers: [ HttpClientService ], // TODO: find nice logging service to use
  bootstrap: [ AppComponent ]
})
export class AppModule { }
