import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, ViewChild } from '@angular/core';
import { Options } from '../models/Options';
import { NgxMeetingService } from '../service/ngx-meeting.service';
import { EventsComponent } from './events.component';

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

  @Input()
  public roomName = 'Lib_created_by_R0DR160HM';

  // Width of the meeting container (default: 100%)
  @Input()
  public width = '100vw';

  // Height of the meeting container (default: 100%)
  @Input()
  public height = '100vh';

  // The Jitsi API
  private api: any;

  // Jitsi CDN
  private cdn = 'https://meet.jit.si/external_api.js';

  constructor(
    private service: NgxMeetingService,
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
    this.start();
  }

  public start() {
    const tag = window.document.createElement('script');
    tag.src = this.cdn;
    tag.onload = () => {
      // @ts-ignore
      this.api = new JitsiMeetExternalAPI(this.domain, this.options);
      this.addEventListeners();
      this.service.setApi(this.api);
    };
    window.document.body.appendChild(tag);
  }

  public prepareOptions() {
    const options: any = this.options || {};
    this.options = Object.assign(options, {
      width: this.width,
      height: this.height,
      parentNode: this.container.nativeElement,
      roomName: this.roomName
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
