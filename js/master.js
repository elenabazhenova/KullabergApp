$(window).resize(function windowResize() {
  $('.tabs-wrapper').pushpin({
    top: $('.tabs-wrapper').offset().top,
    // offset: $('.nav-wrapper').height(),
  });
});
$(window).scroll(function scrollDoc() {
  $('.grid').masonry({});
});
const position = function location() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 300000,
  };

  function success(pos) {
    const crd = pos.coords;
    Materialize.toast('Your current position:' + '<br>Latitude : ' + crd.latitude + '<br>Longitude: ' + crd.longitude + '<br>Accurate to: ' + crd.accuracy + ' meters.', 6000);
  }

  function error(err) {
    Materialize.toast('ERROR(' + err.code + '): ' + err.message, 6000, 'rounded');
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
};
const detectLanguage = function speak() {
  const lang = window.navigator.language;
  Materialize.toast('Your prefered language is ' + lang, 6000);
};
detectLanguage();
position();
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
