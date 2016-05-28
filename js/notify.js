navigator.serviceWorker.register('js/sw.min.js');

function showNotification() {
  Notification.requestPermission(function (result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Kullaberg', {
          body: 'Buzz! Buzz!',
          icon: 'favicon/android-chrome-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample',
        });
      });
    }
  });
}
