import { AvailableDevices } from './Device';

export interface CameraErrorEvent {
  type: string; // A constant representing the overall type of the error.
  message: string; // Additional information about the error.
}

export interface AvatarChangedEvent {
  id: string; // the id of the participant that changed his avatar.
  avatarURL: string; // the new avatar URL.
}

export interface AudioAvailabilityChangedEvent {
  available: boolean; // new available status - boolean
}

export interface AudioMuteStatusChangedEvent {
  muted: boolean; // new muted status - boolean
}

export interface EndpointTextMessageReceivedEvent {
  senderInfo: {
    jid: string; // the jid of the sender
    id: string; // the participant id of the sender
  };
  eventData: {
    name: string; // the name of the datachannel event: `endpoint-text-message`
    text: string; // the received text from the sender
  };
}

export interface LargeVideoChangedEvent {
  id: string; // id of the participant that is now on large video in the stage view.
}

export interface LogEvent {
  logLevel: string; // A constant representing the log type (info, error, debug, warn).
  args: string; // Additional log information.
}

export interface MicErrorEvent {
  type: string; // A constant representing the overall type of the error.
  message: string; // Additional information about the error.
}

export interface ScreenSharingStatusChangedEvent {
  on: boolean; // whether screen sharing is on
  details: {
      // From where the screen sharing is capturing, if known. Values which are
      // passed include 'window', 'screen', 'proxy', 'device'. The value undefined
      // will be passed if the source type is unknown or screen share is off.
      sourceType?: string;
  };
}

export interface DominantSpeakerChangedEvent {
  id: string; // participantId of the new dominant speaker
}

export interface TileViewChangedEvent {
  enabled: boolean; // whether tile view is not displayed or not
}

export interface IncomingMessageEvent {
  from: string; // The id of the user that sent the message
  nick: string; // the nickname of the user that sent the message
  message: string; // the text of the message
}

export interface OutgoingMessageEvent {
  message: string; // the text of the message
}

export interface DisplayNameChangeEvent {
  id: string; // the id of the participant that changed his display name
  displayname: string; // the new display name
}

export interface DeviceListChangedEvent {
  devices: AvailableDevices; // the new list of available devices.
}

export interface EmailChangeEvent {
  id: string; // the id of the participant that changed his email
  email: string; // the new email
}

export interface FeedbackSubmittedEvent {
  error: string; // The error which occurred during submission, if any.
}

export interface FilmstripDisplayChangedEvent {
  visible: boolean; // Whether or not the filmstrip is displayed or hidden.
}

export interface ParticipantJoinedEvent {
  id: string; // the id of the participant
  displayName: string; // the display name of the participant
}

export interface ParticipantKickedOutEvent {
  kicked: {
    id: string; // the id of the participant removed from the room
    local: boolean; // whether or not the participant is the local particiapnt
  };
  kicker: {
    id: string; // the id of the participant who kicked out the other participant
  };
}

export interface ParticipantLeftEvent {
  id: string; // the id of the participant
}

export interface ParticipantRoleChangedEvent {
  id: string; // the id of the participant
  role: string; // the new role of the participant
}

export interface VideoConferenceJoinedEvent {
  roomName: string; // the room name of the conference
  id: string; // the id of the local participant
  displayName: string; // the display name of the local participant
  avatarURL: string; // the avatar URL of the local participant
}

export interface VideoConferenceLeftEvent {
  roomName: string; // the room name of the conference
}

export interface VideoAvailabilituChangedEvent {
  available: boolean; // new available status - boolean
}

export interface VideoMuteStatusChangedEvent {
  muted: boolean; // new muted status - boolean
}

export interface VideoQualityChangedEvent {
  videoQuality: number; // the height of the resolution related to the new video quality setting.
}

export interface SubjectChangeEvent {
  subject: string; // the new subject
}
