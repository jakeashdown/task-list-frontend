import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { defer } from 'rxjs';

import { HttpClientService } from './http-client.service';
import { Task } from './task';
import { NewTask } from './new-task';
import { UpdatedTask } from './updated-task';

describe('HttpClientService', () => {
  let httpClientService: HttpClientService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientService,
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']) },
        { provide: NGXLogger, useValue: jasmine.createSpyObj('NGXLogger', ['info']) }
       ]
    });
    httpClientService = TestBed.get(HttpClientService);
    httpClientSpy = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    const service: HttpClientService = TestBed.get(HttpClientService);
    expect(service).toBeTruthy();
  });

  it('should do a GET request and update the observable when refreshing the cache', () => {
    const expectedTasks: Task[] = [
      new Task(1, "Get a job", "It would help to learn angular"),
      new Task(2, "See your friends", "Book train to London")
    ]
    httpClientSpy.get.and.returnValue(asyncData(expectedTasks));

    const service: HttpClientService = TestBed.get(HttpClientService);
    const subscriber = service.taskCache.subscribe(tasks =>
      expect(tasks).toBe(expectedTasks)
    )
    service.refreshTaskCache();
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should do a POST request when creating a new task', () => {
    httpClientSpy.post.and.returnValue(asyncData(123));

    const service: HttpClientService = TestBed.get(HttpClientService);
    service.createNewTask(new NewTask("Get a job", "It would help to learn angular"));
    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it('should do a PUT request when updating a task', () => {
    httpClientSpy.put.and.returnValue(asyncData(123));

    const service: HttpClientService = TestBed.get(HttpClientService);
    service.updateExistingTask(new UpdatedTask("Get a job", "It would help to learn angular"), 123);
    expect(httpClientSpy.put.calls.count()).toBe(1);
  });
});
