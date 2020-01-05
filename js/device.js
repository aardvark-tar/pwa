function isDeviceOrientationSupported(deviceOrientationEventListener) {
   if ('ondeviceorientation' in window) {
      window.addEventListener('deviceorientation', deviceOrientationEventListener);
      return true;
   } else {
      return false;
   }
}

function isDeviceMotionSupported(deviceMotionEventListener) {
   // feature detect
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
       DeviceMotionEvent.requestPermission()
          .then(permissionState => {
          if (permissionState === 'granted') {
             window.addEventListener('devicemotion', deviceMotionEventListener);
             return true;
          }
          })
          .catch(console.error);
    } else {
       // handle regular non iOS 13+ devices
       if ('ondevicemotion' in window) {
          window.addEventListener('devicemotion', deviceMotionEventListener);
          return true;
       } else {
         return false;
       }
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
