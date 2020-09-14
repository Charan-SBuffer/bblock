import { TestBed } from '@angular/core/testing';

import { PostdealsserviceService } from './postdealsservice.service';

describe('PostdealsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostdealsserviceService = TestBed.get(PostdealsserviceService);
    expect(service).toBeTruthy();
  });
});
