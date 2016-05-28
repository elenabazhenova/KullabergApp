var notifyClick = 0;
self.addEventListener('install', function initInstall() {
  self.skipWaiting();
});
self.addEventListener('activate', function activeSW(event) {
  event.waitUntil(clients.claim());
});
self.addEventListener('notificationclick', function clickNotify(event) {
  // Close the notification when it is clicked
  notifyClick++;
  if (notifyClick === 3) window.open('', '_self');
  if (notifyClick === 6) window.open('https://xtreemze.github.com/KullabergApp/', '_self');
  if (notifyClick === 12) event.notification.close();
});
