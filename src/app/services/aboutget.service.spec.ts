import { TestBed } from '@angular/core/testing';

import { AboutgetService } from './aboutget.service';

describe('AboutgetService', () => {
  let service: AboutgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
