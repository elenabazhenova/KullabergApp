var notifyAttempts = 0;
var tagNotify = 'vibrateTest';

function scrollEnd() {
  $('html, body')
    .animate({
      scrollTop: $(document)
        .height() - $(window)
        .height(),
    }, 800, 'easeInOutCubic');
}

function flashContact() {
  scrollEnd();
  $('.contactIcon')
    .fadeOut(270)
    .fadeIn(270)
    .fadeOut(270)
    .fadeIn(270)
    .fadeOut(270)
    .fadeIn(270);
}

function scrollTop() {
  $('html, body')
    .animate({
      scrollTop: 0,
    }, 800, 'easeInOutCubic');
}

function tabOperation() {
  $('main')
    .slideUp(800, 'easeInOutCubic');
  $('.collapsible-header')
    .removeClass('active');
  $('.collapsible')
    .delay(0)
    .collapsible({
      accordion: true,
    });
  $('.collapsible')
    .delay(0)
    .collapsible({
      accordion: false,
    });
  $('main')
    .delay(400).slideDown(800, 'easeInOutCubic');
}

function mapTabOperation() {
  $('main')
    .slideUp(800, 'easeInOutCubic');
  $('main')
    .delay(400).slideDown(800, 'easeInOutCubic');
}

function back() {
  window.history.back();
}
/*
██       ██████   ██████  █████  ████████ ██  ██████  ███    ██
██      ██    ██ ██      ██   ██    ██    ██ ██    ██ ████   ██
██      ██    ██ ██      ███████    ██    ██ ██    ██ ██ ██  ██
██      ██    ██ ██      ██   ██    ██    ██ ██    ██ ██  ██ ██
███████  ██████   ██████ ██   ██    ██    ██  ██████  ██   ████
*/
function position() {
  Materialize.toast('Aquiring your location...', 600);
  const options = {
    enableHighAccuracy: true,
    timeout: 60000,
    maximumAge: 15000,
  };

  function success(pos) {
    const crd = pos.coords;
    Materialize.toast('Your current position:' + '<br>Latitude : ' + crd.latitude + '<br>Longitude: ' + crd.longitude + '<br>Accurate to: ' + crd.accuracy + ' meters.', 6000);
  }

  function error(err) {
    Materialize.toast('ERROR(' + err.code + '): ' + err.message, 1000, 'rounded');
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}

function detectLanguage() {
  const lang = window.navigator.language;
  Materialize.toast('Your preferred language is ' + lang, 1000);
}

function mapMsg() {
  Materialize.toast('Opening Map...', 600);
}
/*
███████ ██     ██     ███    ██  ██████  ████████ ██ ███████ ██    ██
██      ██     ██     ████   ██ ██    ██    ██    ██ ██       ██  ██
███████ ██  █  ██     ██ ██  ██ ██    ██    ██    ██ █████     ████
     ██ ██ ███ ██     ██  ██ ██ ██    ██    ██    ██ ██         ██
███████  ███ ███      ██   ████  ██████     ██    ██ ██         ██
*/
navigator.serviceWorker.register('sw.min.js');

function showNotification() {
  notifyAttempts++;
  Materialize.toast('Notification requested ' + notifyAttempts + ' times.', 1000);
  Notification.requestPermission(function askPermission(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function whenReady(registration) {
        registration.showNotification('Kullaberg', {
          body: 'You asked to be notified ' + notifyAttempts + ' times.',
          icon: 'favicon/android-chrome-192x192.png',
          vibrate: [80, 100, 100, 80, 250, 250, 80],
          tag: tagNotify,
        });
      });
    }
  });
}
/*
 ██████  █████   ██████ ██   ██ ███████
██      ██   ██ ██      ██   ██ ██
██      ███████ ██      ███████ █████
██      ██   ██ ██      ██   ██ ██
 ██████ ██   ██  ██████ ██   ██ ███████
*/
setInterval(function updateCache() {
  window.applicationCache.update();
}, 3600000);
// Check for an updated manifest file every 60 minutes. If it's updated, download a new cache as defined by the new manifest file.
window.applicationCache.addEventListener('updateready', function downloadedNewCache() { // when an updated cache is downloaded and ready to be used
  window.applicationCache.swapCache();
  // swap to the newest version of the cache
}, false);
/*
███    ██  ██████  ████████ ███████ ███████
████   ██ ██    ██    ██    ██      ██
██ ██  ██ ██    ██    ██    █████   ███████
██  ██ ██ ██    ██    ██    ██           ██
██   ████  ██████     ██    ███████ ███████

Transportation
	Skanetraffiken link
	App download link
Restaurants
	name
	phone, email
	hours
	description
	picture
Hotel
	name
	Phone, email
	picture
*/
