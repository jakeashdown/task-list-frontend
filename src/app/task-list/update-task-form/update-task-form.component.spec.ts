import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

import { HttpClientService } from '../../http-client.service';
import { UpdateTaskFormComponent } from './update-task-form.component';

describe('UpdateTaskFormComponent', () => {
  let component: UpdateTaskFormComponent;
  let fixture: ComponentFixture<UpdateTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaskFormComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [
        { provide: HttpClientService, useValue: jasmine.createSpyObj('HttpClientService', ['refreshTaskCache', 'postNewTask']) },
        { provide: NGXLogger, useValue: jasmine.createSpyObj('NGXLogger', ['info']) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: add test that 'updated task form' is updated in component
  // TODO: add test that 'updated task form' is submitted by form submission
});
