import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientService } from '../http-client.service';
import { TaskListComponent } from './task-list.component';
import { UpdateTaskFormComponent } from './update-task-form/update-task-form.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let httpClientServiceSpy: jasmine.SpyObj<HttpClientService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('HttpClientService', ['refreshTaskCache', 'postNewTask']);
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ TaskListComponent, UpdateTaskFormComponent ],
      providers: [ { provide: HttpClientService, useValue: spy } ]
    }).compileComponents();
    httpClientServiceSpy = TestBed.get(HttpClientService);
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add test that 'all tasks' are listed in component
  // TODO: add test that child component is rendered on click
});
