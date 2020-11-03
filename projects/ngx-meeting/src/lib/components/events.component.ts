import { Component, EventEmitter, Output } from '@angular/core';
import {
  AudioAvailabilityChangedEvent,
  AudioMuteStatusChangedEvent,
  AvatarChangedEvent,
  CameraErrorEvent,
  DeviceListChangedEvent,
  DisplayNameChangeEvent,
  DominantSpeakerChangedEvent,
  EmailChangeEvent,
  EndpointTextMessageReceivedEvent,
  FeedbackSubmittedEvent,
  FilmstripDisplayChangedEvent,
  IncomingMessageEvent,
  LargeVideoChangedEvent,
  LogEvent,
  MicErrorEvent,
  OutgoingMessageEvent,
  ParticipantJoinedEvent,
  ParticipantKickedOutEvent,
  ParticipantLeftEvent,
  ParticipantRoleChangedEvent,
  ScreenSharingStatusChangedEvent,
  SubjectChangeEvent,
  TileViewChangedEvent,
  VideoAvailabilituChangedEvent,
  VideoConferenceJoinedEvent,
  VideoConferenceLeftEvent,
  VideoMuteStatusChangedEvent,
  VideoQualityChangedEvent
} from '../models/Events';

@Component({
  template: ''
})
export class EventsComponent {

  @Output()
  public cameraError = new EventEmitter<CameraErrorEvent>();

  @Output()
  public avatarChanged = new EventEmitter<AvatarChangedEvent>();

  @Output()
  public audioAvailabilityChanged = new EventEmitter<AudioAvailabilityChangedEvent>();

  @Output()
  public audioMuteStatusChanged = new EventEmitter<AudioMuteStatusChangedEvent>();

  @Output()
  public endpointTextMessageReceived = new EventEmitter<EndpointTextMessageReceivedEvent>();

  @Output()
  public largeVideoChanged = new EventEmitter<LargeVideoChangedEvent>();

  @Output()
  public log = new EventEmitter<LogEvent>();

  @Output()
  public micError = new EventEmitter<MicErrorEvent>();

  @Output()
  public screenSharingStatusChanged = new EventEmitter<ScreenSharingStatusChangedEvent>();

  @Output()
  public dominantSpeakerChanged = new EventEmitter<DominantSpeakerChangedEvent>();

  @Output()
  public tileViewChanged = new EventEmitter<TileViewChangedEvent>();

  @Output()
  public incomingMessage = new EventEmitter<IncomingMessageEvent>();

  @Output()
  public outgoingMessage = new EventEmitter<OutgoingMessageEvent>();

  @Output()
  public displayNameChange = new EventEmitter<DisplayNameChangeEvent>();

  @Output()
  public deviceListChanged = new EventEmitter<DeviceListChangedEvent>();

  @Output()
  public emailChange = new EventEmitter<EmailChangeEvent>();

  @Output()
  public feedbackSubmitted = new EventEmitter<FeedbackSubmittedEvent>();

  @Output()
  public filmstripDisplayChanged = new EventEmitter<FilmstripDisplayChangedEvent>();

  @Output()
  public participantJoined = new EventEmitter<ParticipantJoinedEvent>();

  @Output()
  public participantKickedOut = new EventEmitter<ParticipantKickedOutEvent>();

  @Output()
  public participantLeft = new EventEmitter<ParticipantLeftEvent>();

  @Output()
  public participantRoleChanged = new EventEmitter<ParticipantRoleChangedEvent>();

  @Output()
  public passwordRequired = new EventEmitter<undefined>();

  @Output()
  public videoConferenceLeft = new EventEmitter<VideoConferenceLeftEvent>();

  @Output()
  public videoConferenceJoined = new EventEmitter<VideoConferenceJoinedEvent>();

  @Output()
  public videoAvailabilityChanged = new EventEmitter<VideoAvailabilituChangedEvent>();

  @Output()
  public videoMuteStatusChanged = new EventEmitter<VideoMuteStatusChangedEvent>();

  @Output()
  public videoQualityChanged = new EventEmitter<VideoQualityChangedEvent>();

  @Output()
  public readyToClose = new EventEmitter<undefined>();

  @Output()
  public subjectChange = new EventEmitter<SubjectChangeEvent>();

  @Output()
  public suspendDetected = new EventEmitter<undefined>();

}
