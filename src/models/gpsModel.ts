export default class gpsModel {
    DeviceId: number;
    DeviceType: string;
    TimeStamp: string;
    Location: string;

    constructor(_deviceId: number, _deviceType: string, _timeStamp: string, _location: string) {
        this.DeviceId = _deviceId;
        this.DeviceType = _deviceType;
        this.TimeStamp = _timeStamp;
        this.Location = _location;
    }
}