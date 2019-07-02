import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

import { HttpClientService } from '../http-client.service';
import { NewTaskFormComponent } from './new-task-form.component';

describe('NewTaskFormComponent', () => {
  let component: NewTaskFormComponent;
  let fixture: ComponentFixture<NewTaskFormComponent>;
  let httpClientServiceSpy: jasmine.SpyObj<HttpClientService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskFormComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: HttpClientService, useValue: jasmine.createSpyObj('HttpClientService', ['refreshTaskCache', 'postNewTask']) },
        { provide: NGXLogger, useValue: jasmine.createSpyObj('NGXLogger', ['info']) }
      ]
    }).compileComponents();
    httpClientServiceSpy = TestBed.get(HttpClientService);
    fixture = TestBed.createComponent(NewTaskFormComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add test that 'new task' is updated in component
  // TODO: add test that 'new task' is submitted by form submission
});
