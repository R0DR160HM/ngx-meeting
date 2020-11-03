import { TestBed } from '@angular/core/testing';

import { NgxMeetingService } from './ngx-meeting.service';

describe('NgxMeetingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMeetingService = TestBed.get(NgxMeetingService);
    expect(service).toBeTruthy();
  });
});
