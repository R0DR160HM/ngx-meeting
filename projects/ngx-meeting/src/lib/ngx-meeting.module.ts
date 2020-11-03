import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsComponent } from './components/events.component';
import { NgxMeetingComponent } from './components/ngx-meeting.component';



@NgModule({
  declarations: [NgxMeetingComponent, EventsComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxMeetingComponent]
})
export class NgxMeetingModule { }
