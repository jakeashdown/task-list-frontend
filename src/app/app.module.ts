import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClientService } from './http-client.service';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskFormComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ HttpClientService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
