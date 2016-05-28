var notifyAttempts = 1;
// $(window).resize(function windowResize() {
//   $('.tabs-wrapper').pushpin({
//     top: $('.tabs-wrapper').offset().top,
//     // offset: $('.nav-wrapper').height(),
//   });
// });
// $(window).scroll(function scrollDoc() {
//   $('.grid').masonry({});
// });
/*
██       ██████   ██████  █████  ████████ ███████
██      ██    ██ ██      ██   ██    ██    ██
██      ██    ██ ██      ███████    ██    █████
██      ██    ██ ██      ██   ██    ██    ██
███████  ██████   ██████ ██   ██    ██    ███████
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

function showNotification(notifyMsg) {
  Notification.requestPermission(function askPermission(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function whenReady(registration) {
        registration.showNotification('Kullaberg', {
          body: notifyMsg,
          icon: 'favicon/android-chrome-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample',
        });
      });
      notifyAttempts++;
    }
  });
}
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
