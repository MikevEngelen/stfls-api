"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class gpsModel {
    constructor(_deviceId, _deviceType, _timeStamp, _location) {
        this.DeviceId = _deviceId;
        this.DeviceType = _deviceType;
        this.TimeStamp = _timeStamp;
        this.Location = _location;
    }
}
exports.default = gpsModel;
