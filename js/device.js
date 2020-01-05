function isDeviceOrientationSupported(deviceOrientationEventListener) {
   if (typeof DeviceMotionEvent.requestPermission === 'function') {
      // iOS 13+
      DeviceOrientationEvent.requestPermission()
         .then(response => {
            if (response == 'granted') {
               window.addEventListener('deviceorientation', deviceOrientationEventListener);
               return true;
            }
         })
         .catch(console.error)
   } else {
      // non iOS 13+
      if ('ondeviceorientation' in window) {
         window.addEventListener('deviceorientation', deviceOrientationEventListener);
         return true;
      }
   }
   return false;
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
