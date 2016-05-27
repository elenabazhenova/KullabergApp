self.addEventListener('install', function swInstall() {
  self.skipWaiting();
});

self.addEventListener('activate', function swEventActivate(event) {
  event.waitUntil(clients.claim());
});

self.addEventListener('notificationclick', function swOnClickClose(event) {
  // Close the notification when it is clicked
  event.notification.close();
});
