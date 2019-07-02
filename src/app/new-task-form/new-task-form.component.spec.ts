import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskFormComponent } from './new-task-form.component';
import { HttpClientService } from '../http-client.service';
import { FormsModule } from '@angular/forms';

describe('NewTaskFormComponent', () => {
  let component: NewTaskFormComponent;
  let fixture: ComponentFixture<NewTaskFormComponent>;
  let httpClientServiceSpy: jasmine.SpyObj<HttpClientService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('HttpClientService', ['refreshTaskCache', 'postNewTask']);
    TestBed.configureTestingModule({
      declarations: [ NewTaskFormComponent ],
      imports: [ FormsModule ],
      providers: [ { provide: HttpClientService, useValue: spy } ]
    }).compileComponents();
    httpClientServiceSpy = TestBed.get(HttpClientService);
    fixture = TestBed.createComponent(NewTaskFormComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
