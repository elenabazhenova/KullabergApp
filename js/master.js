  $(window).resize(function windowResize() {
    $('.tabs-wrapper').pushpin({
      top: $('.tabs-wrapper').offset().top,
      // offset: $('.nav-wrapper').height(),
    });
  });
  $(window).scroll(function scrollDoc() {
    $('.grid').masonry({});
  });
  /*
  ██       ██████   ██████  █████  ████████ ███████
  ██      ██    ██ ██      ██   ██    ██    ██
  ██      ██    ██ ██      ███████    ██    █████
  ██      ██    ██ ██      ██   ██    ██    ██
  ███████  ██████   ██████ ██   ██    ██    ███████
  */
  function position() {
    Materialize.toast('Aquiring your location...', 6000);
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
      Materialize.toast('ERROR(' + err.code + '): ' + err.message, 6000, 'rounded');
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function detectLanguage() {
    const lang = window.navigator.language;
    Materialize.toast('Your preferred language is ' + lang, 6000);
  }

  function mapMsg() {
    Materialize.toast('Opening Map...', 6000);
  }
  /*
  ███    ██  ██████  ████████ ██ ███████ ██  ██████  █████  ████████ ██  ██████  ███    ██ ███████
  ████   ██ ██    ██    ██    ██ ██      ██ ██      ██   ██    ██    ██ ██    ██ ████   ██ ██
  ██ ██  ██ ██    ██    ██    ██ █████   ██ ██      ███████    ██    ██ ██    ██ ██ ██  ██ ███████
  ██  ██ ██ ██    ██    ██    ██ ██      ██ ██      ██   ██    ██    ██ ██    ██ ██  ██ ██      ██
  ██   ████  ██████     ██    ██ ██      ██  ██████ ██   ██    ██    ██  ██████  ██   ████ ███████
  */
  function notifyMe() {
    var notification;
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      Materialize.toast('This browser does not support desktop notification', 6000);
      // Let's check whether notification permissions have already been granted
    } else if (Notification.permission === 'granted') {
      // If it's okay let's create a notification
      notification = new Notification('New updates!', 'favicon/android-chrome-192x192.png', 'Kullaberg');
      // Otherwise, we need to ask the user for permission
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function askFor(permission) {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          notification = new Notification('New updates!', 'favicon/android-chrome-192x192.png', 'Kullaberg');
        }
      });
    }
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }
  Notification.requestPermission().then(function giveThe(result) {
    Materialize.toast('Notification request ' + result, 1000);
  });

  function spawnNotification(theBody, theIcon, theTitle) {
    const options = {
      body: theBody,
      icon: theIcon,
    };
    const n = new Notification(theTitle, options);
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
