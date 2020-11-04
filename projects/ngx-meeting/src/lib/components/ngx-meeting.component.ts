import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Options } from '../models/Options';
import { NgxMeetingService } from '../service/ngx-meeting.service';
import JitsiMeetExternalAPI from 'jitsi-iframe-api';
import { EventsComponent } from './events.component';

@Component({
  selector: 'ngx-meeting',
  templateUrl: './ngx-meeting.component.html'
})
export class NgxMeetingComponent extends EventsComponent implements OnInit, OnDestroy {

  // Container where the meeting will be embbed
  @ViewChild('meetingContainer', { static: true })
  public container: ElementRef<HTMLDivElement>;

  // Domain used to build the conference URL, 'meet.jit.si' for example
  @Input()
  public domain: string;

  // Additional options to the meeting
  @Input()
  public options: Options;

  // Width of the meeting container (default: 100%)
  @Input()
  public width = '100%';

  // Height of the meeting container (default: 100%)
  @Input()
  public height = '100%';

  // The Jitsi API
  private api: any;

  constructor(
    private service: NgxMeetingService
  ) {
    super();
  }

  @HostListener('beforeunload')
  ngOnDestroy(): void {
    if (this.api) {
      this.service.close();
    }
  }

  ngOnInit() {
    this.prepareOptions();
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
    this.addEventListeners();
    this.service.setApi(this.api);
  }

  public prepareOptions() {
    const options: any = this.options || {};
    this.options = Object.assign(options, {
      width: '100%',
      height: '100%',
      parentNode: this.container.nativeElement
    });
  }

  public addEventListeners() {
    const events = [
      'cameraError',
      'avatarChanged',
      'audioAvailabilityChanged',
      'audioMuteStatusChanged',
      'endpointTextMessageReceived',
      'largeVideoChanged',
      'log',
      'micError',
      'screenSharingStatusChanged',
      'dominantSpeakerChanged',
      'tileViewChanged',
      'incomingMessage',
      'outgoingMessage',
      'displayNameChange',
      'devideListChanged',
      'emailChange',
      'feedbackSubmitted',
      'filmstripDisplayChanged',
      'participantJoined',
      'participantKickedOut',
      'participantLeft',
      'participantRoleChanged',
      'passwordRequired',
      'videoConferenceJoined',
      'videoConferenceLeft',
      'videoAvailabilityChanged',
      'videoMuteStatusChanged',
      'videoQualityChanged',
      'readyToClose',
      'subjectChange',
      'suspendDetected'
    ];
    events.forEach(e => {
      this.api.on(e, this[e].emit);
    });
  }

}
