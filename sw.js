self.addEventListener('install', function initInstall() {
  self.skipWaiting();
});
self.addEventListener('activate', function activeSW(event) {
  event.waitUntil(clients.claim());
});
self.addEventListener('notificationclick', function clickNotify(event) {
  // Close the notification when it is clicked
  event.notification.close();
});
