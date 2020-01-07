window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
    
    //navigator.serviceWorker.ready always resolve
    navigator.serviceWorker.ready.then(function (registration) {
        console.log('Service worker successfully registered on scope', registration.scope);
    });
  }
}
