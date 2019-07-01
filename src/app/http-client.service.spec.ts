import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './http-client.service';
import { HttpClient } from '@angular/common/http';

describe('HttpClientService', () => {
  let httpClientService: HttpClientService
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    TestBed.configureTestingModule({
      providers: [ HttpClientService, { provide: HttpClient, useValue: spy } ]
    })
    httpClientService = TestBed.get(HttpClientService)
    httpClientSpy = TestBed.get(HttpClient)
  });

  it('should be created', () => {
    const service: HttpClientService = TestBed.get(HttpClientService);
    expect(service).toBeTruthy();
  });
});
