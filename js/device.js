function isDeviceOrientationSupported(deviceOrientationEventListener) {
   if ('ondeviceorientation' in window) {
      window.addEventListener('deviceorientation', deviceOrientationEventListener);
      return true;
   } else {
      return false;
   }
}

function isDeviceMotionSupported(deviceMotionEventListener) {
   if ('ondevicemotion' in window) {
      window.addEventListener('devicemotion', deviceMotionEventListener);
      return true;
   } else {
      return false;
   }
}

function doesCompassNeedsCalibration(compassNeedsCalibrationEventListener) {
   if ('oncompassneedscalibration' in window) {
      window.addEventListener('compassneedscalibration', compassNeedsCalibrationEventListener);
      return true;
   } else {
      return false;
   }
}