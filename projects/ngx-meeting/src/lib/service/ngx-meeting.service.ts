import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AvailableDevices } from '../models/Device';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class NgxMeetingService {

  private api: any;

  constructor() { }

  /**
   * Used for internal logics, do not disturb
   * @ignore
   */
  public setApi(api: any) {
    this.api = api;
  }

  public myUserId(): string {
    this.continue();
    return this.api._myUserId;
  }

  public participantsIds(): string[] {
    this.continue();
    const participants = this.api._participants;
    return Object.keys(participants);
  }

  public captureLargeVideoScreenshot() {
    this.continue();
    return from<Promise<string>>(this.api.captureLargeVideoScreenshot());
  }

  public getAvailableDevices() {
    this.continue();
    return from<Promise<AvailableDevices>>(this.api.getAvailableDevices());
  }

  public getCurrentDevices() {
    this.continue();
    return from<Promise<AvailableDevices>>(this.api.getCurrentDevices());
  }

  public getParticipantsInfo(): UserInfo[] {
    this.continue();
    return this.getParticipantsInfo();
  }

  public getVideoQuality(): number {
    this.continue();
    return this.api.getVideoQuality();
  }

  public isDeviceChangeAvailable(deviceType: 'output' | 'input') {
    this.continue();
    return from<Promise<boolean>>(this.api.isDeviceChangeAvailable(deviceType));
  }

  public isDeviceListAvailable() {
    this.continue();
    return from<Promise<boolean>>(this.api.isDeviceListAvailable());
  }

  public isMultipleAudioInputSupported() {
    this.continue();
    return from<Promise<boolean>>(this.api.isMultipleAudioInputSupported());
  }

  public pinParticipant(participantId: string) {
    this.continue();
    this.api.pinParticipant(participantId);
  }

  public setAudioInputDevicce(deviceLabel: string, deviceId: string) {
    this.continue();
    this.api.setAudioInputDevice(deviceLabel, deviceId);
  }

  public setAudioOutputDevice(deviceLabel: string, deviceId: string) {
    this.continue();
    this.api.setAudioOutputDevice(deviceLabel, deviceId);
  }

  public setLargeVideoParticipant(participantId: string) {
    this.continue();
    this.api.setLargeVideoParticipant(participantId);
  }

  public setVideoInputDevice(deviceLabel: string, deviceId: string) {
    this.continue();
    this.api.setVideoInputDevice(deviceLabel, deviceId);
  }

  public doDisplayName(nickname: string) {
    this.continue();
    this.api.executeCommand('displayName', nickname);
  }

  public doPassword(password: string) {
    this.continue();
    this.api.executeCommand('password', password);
  }

  public doToggleLobby(on = true) {
    this.continue();
    this.api.executeCommand('toggleLobby', on);
  }

  public doChangeSubject(subject: string) {
    this.continue();
    this.api.executeCommand('subject', subject);
  }

  public doToggleAudio() {
    this.continue();
    this.api.executeCommand('toggleAudio');
  }

  public doToggleVideo() {
    this.continue();
    this.api.executeCommand('toggleVideo');
  }

  public doToggleFilmStrip() {
    this.continue();
    this.api.executeCommand('toggleFilmStrip');
  }

  public doToggleChat() {
    this.continue();
    this.api.executeCommand('toggleChat');
  }

  public doToggleShareScreen() {
    this.api.executeCommand('toggleShareScreen');
  }

  public doToggleTileView() {
    this.continue();
    this.api.executeCommand('toggleTileView');
  }

  public doHangup() {
    this.continue();
    this.api.executeCommand('hangup');
  }

  public doChangeEmail(email: string) {
    this.continue();
    this.api.executeCommand('email', email);
  }

  public doChangeAvatarUrl(avatarUrl: string) {
    this.continue();
    this.api.executeCommand('avatarUrl', avatarUrl);
  }

  public doSendEndpointTextMessage(receiverParticipantId: string, message: string) {
    this.continue();
    this.api.executeCommand('sendEndpointTextMessage', receiverParticipantId, message);
  }

  public doSetLargeVideoParticipant(participantId: string) {
    this.continue();
    this.api.executeCommand('setLargeVideoParticipant', participantId);
  }

  public doSetVideoQuality(resolution = 720) {
    this.continue();
    this.api.executeCommand('setVideoQuality', resolution);
  }

  public doMuteEveryone() {
    this.continue();
    this.api.executeCommand('muteEveryone');
  }

  public getNumberOfParticipants(): number {
    this.continue();
    return this.api.getNumberOfParticipants();
  }

  public getAvatarUrl(participantId = this.myUserId()): string {
    this.continue();
    return this.api.getAvatarUrl(participantId);
  }

  public getDisplayName(participantId = this.myUserId()): string {
    this.continue();
    return this.api.getDisplayName(participantId);
  }

  public getEmail(participantId = this.myUserId()): string {
    this.continue();
    return this.api.getEmail(participantId);
  }

  public isAudioMuted() {
    this.continue();
    return from<Promise<boolean>>(this.api.isAudioMuted());
  }

  public isVideoMuted() {
    this.continue();
    return from<Promise<boolean>>(this.api.isVideoMuted());
  }

  public isAudioAvailable() {
    this.continue();
    return from<Promise<boolean>>(this.api.isAudioAvailable());
  }

  public isVideoAvailable() {
    this.continue();
    return from<Promise<boolean>>(this.api.isVideoAvailable());
  }

  /**
   * @ignore
   * Internal logic, to close a meeting, just remove the NgxMeetingComponent from your template
   */
  public close() {
    this.api.dispose();
    this.api = undefined;
  }

  private continue() {
    if (!this.api) {
      throw new Error('You must be in a meeting to execute this method!');
    }
  }

}
