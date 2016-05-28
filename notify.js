navigator.serviceWorker.register('sw.min.js');

function showNotification(notifyMsg) {
  Notification.requestPermission(function (result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Kullaberg', {
          body: notifyMsg,
          icon: 'favicon/android-chrome-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample',
        });
      });
    }
  });
}