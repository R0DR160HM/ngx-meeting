import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMeetingComponent } from './ngx-meeting.component';

describe('NgxMeetingComponent', () => {
  let component: NgxMeetingComponent;
  let fixture: ComponentFixture<NgxMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
