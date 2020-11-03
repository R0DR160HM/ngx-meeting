export interface Device {
  deviceId: string;
  groupId: string;
  kind: string;
  label: string;
}

export interface AvailableDevices {
  audioInput: Array<Device>;
  audioOutput: Array<Device>;
  videoInput: Array<Device>;
}
