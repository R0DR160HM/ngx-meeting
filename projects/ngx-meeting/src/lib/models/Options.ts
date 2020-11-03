export interface Options {
  roomName?: string; // name of the room to join.
  configOverwrite?: any; // JS object with overrides for options defined in https://github.com/jitsi/jitsi-meet/blob/master/config.js
  interfaceConfigOverwrite?: any; // JS object with overrides for options defined in https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js
  noSSL?: boolean; // (defaults to false) boolean indicating if the server should be contract using HTTP or HTTPS
  jwt?: string; // JWT token
  onload?: () => void; // handler for the iframe onload event
  invitees: Array<unknown>; // Array of objects containing information about new participants that will be invited in the call.
  devices: unknown; // A map containing information about the initial devices that will be used in the call.
  userInfo?: unknown; // JS object containing information about the participant opening the meeting, such as email.
}
