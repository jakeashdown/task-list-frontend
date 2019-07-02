import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { HttpClientService } from './http-client.service';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskFormComponent } from './task-list/update-task-form/update-task-form.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TaskListComponent,
        UpdateTaskFormComponent,
        NewTaskFormComponent
      ],
      imports: [
        LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [ HttpClientService ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // TODO: remove this and check that both child components are rendered
  it('should render a container div', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.container')).toBeTruthy();
  });
});
