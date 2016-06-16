var notifyAttempts = 0;
var tagNotify = 'vibrateTest';
var hiddenContact = false;
var locate = [];
/*
 ██████  ███    ██ ██      ██ ███    ██ ███████
██    ██ ████   ██ ██      ██ ████   ██ ██
██    ██ ██ ██  ██ ██      ██ ██ ██  ██ █████
██    ██ ██  ██ ██ ██      ██ ██  ██ ██ ██
 ██████  ██   ████ ███████ ██ ██   ████ ███████
*/
function onlineCheck() {
  if (!window.navigator.onLine && !hiddenContact) {
    $('.onlineOnly')
      .slideUp();
    hiddenContact = true;
  } else if (hiddenContact && window.navigator.onLine) {
    $('.onlineOnly')
      .show()
      .slideUp(0)
      .slideDown();
    hiddenContact = false;
  }
}

function scrollEnd() {
  $('html, body')
    .animate({
      scrollTop: $(document)
        .height() - $(window)
        .height(),
    }, 800, 'easeInOutCubic');
}

function flashContact() {
  onlineCheck();
  scrollEnd();
  $('.contactIcon')
    .finish()
    .delay(400)
    .fadeOut(250)
    .fadeIn(250)
    .fadeOut(250)
    .fadeIn(250)
    .fadeOut(250)
    .fadeIn(250);
}

function scrollTop() {
  $('html, body')
    .animate({
      scrollTop: 0,
    }, 800, 'easeInOutCubic');
}

function turnOff() {
  $('.logoImg')
    .removeClass('turn');
}

function turnOn() {
  $('.logoImg')
    .addClass('turn');
}

function tabOperation() {
  $('footer')
    .stop()
    .fadeOut(0);
  $('main')
    .slideUp(0, 'easeOutSine', function tOn() {
      turnOn();
    })
    .delay(80)
    .slideDown(520, 'easeInQuart', function tOff() {
      turnOff();
      $('footer')
        .fadeIn();
    });
  $('.collapsible-header')
    .removeClass('active');
  $('.collapsible')
    .collapsible({
      accordion: true,
    })
    .collapsible({
      accordion: false,
    });
}

function mapTabOperation() {
  $('footer')
    .stop()
    .fadeOut(0);
  $('main')
    .slideUp(0, 'easeOutSine', function t2O1() {
      turnOn();
    })
    .delay(80)
    .slideDown(520, 'easeInQuart', function t2O2() {
      turnOff();
      $('footer')
        .fadeIn();
    });
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
    maximumAge: 10000,
  };

  function success(pos) {
    const coordinates = pos.coords;
    locate[0] = coordinates.latitude;
    locate[1] = coordinates.longitude;
    locate[2] = coordinates.accuracy;
    Materialize.toast('Your current position:' + '<br>Latitude : ' + locate[0] + '<br>Longitude: ' + locate[1] + '<br>Accurate to: ' + locate[2] + ' meters.', 6000);
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
  Materialize.toast('Opening Map...', 200);
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
          icon: 'favicon/android-chrome-192x192.png?v=eEEwEaEvl1',
          vibrate: [80, 100, 100, 80, 250, 250, 80],
          tag: tagNotify,
        });
      });
    }
  });
}
// Check if a new cache is available on page load.
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
