import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { HttpClientService } from '../http-client.service';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let httpClientServiceSpy: jasmine.SpyObj<HttpClientService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('HttpClientService', ['getAllTasks', 'postNewTask']);
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      providers: [ { provide: HttpClientService, useValue: spy } ]
    })
    .compileComponents();
    httpClientServiceSpy = TestBed.get(HttpClientService)
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
