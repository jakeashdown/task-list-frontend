import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

import { HttpClientService } from './http-client.service';

describe('HttpClientService', () => {
  let httpClientService: HttpClientService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientService,
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get', 'post']) },
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

  // TODO: Add test that 'cache refresh' causes a GET request and updates the cache Observable
  // TODO: add test that 'post new task' causes a POST request
});
