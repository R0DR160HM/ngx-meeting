import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Options } from '../models/Options';
import { NgxMeetingService } from '../service/ngx-meeting.service';
import { EventsComponent } from './events.component';
import JitsiMeetExternalAPI from 'jitsi-iframe-api';

@Component({
  selector: 'ngx-meeting',
  templateUrl: './ngx-meeting.component.html'
})
export class NgxMeetingComponent extends EventsComponent implements AfterViewInit, OnDestroy {

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

  ngAfterViewInit() {
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
    this.api.addEventListeners({
      cameraError: this.cameraError.emit,
      avatarChanged: this.avatarChanged.emit,
      audioAvailabilityChanged: this.audioAvailabilityChanged.emit,
      audioMuteStatusChanged: this.audioMuteStatusChanged.emit,
      endpointTextMessageReceived: this.endpointTextMessageReceived.emit,
      largeVideoChanged: this.largeVideoChanged.emit,
      log: this.log.emit,
      micError: this.micError.emit,
      screenSharingStatusChanged: this.screenSharingStatusChanged.emit,
      dominantSpeakerChanged: this.dominantSpeakerChanged.emit,
      tileViewChanged: this.tileViewChanged.emit,
      incomingMessage: this.incomingMessage.emit,
      outgoingMessage: this.outgoingMessage.emit,
      displayNameChange: this.displayNameChange.emit,
      deviceListChanged: this.deviceListChanged.emit,
      emailChange: this.emailChange.emit,
      feedbackSubmitted: this.feedbackSubmitted.emit,
      filmstripDisplayChanged: this.filmstripDisplayChanged.emit,
      participantJoined: this.participantJoined.emit,
      participantKickedOut: this.participantKickedOut.emit,
      participantLeft: this.participantLeft.emit,
      participantRoleChanged: this.participantRoleChanged.emit,
      passwordRequired: this.passwordRequired.emit,
      videoConferenceJoined: this.videoConferenceJoined.emit,
      videoConferenceLeft: this.videoConferenceLeft.emit,
      videoAvailabilityChanged: this.videoAvailabilityChanged.emit,
      videoMuteStatusChanged: this.videoMuteStatusChanged.emit,
      videoQualityChanged: this.videoQualityChanged.emit,
      readyToClose: this.readyToClose.emit,
      subjectChange: this.subjectChange.emit,
      suspendDetected: this.suspendDetected.emit
    });
  }

}
