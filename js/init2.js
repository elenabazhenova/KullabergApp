(function jQ($) {
  $('.scrollspy').scrollSpy();
  $('.btn-floating.btn-large.red').click(function hamburger() {
    $('.nav-icon4').toggleClass('open');
  });
  $('.tabs-wrapper').pushpin({
    top: $('.tabs-wrapper').offset().top,
    // offset: $('.nav-wrapper').height(),
  });
  $('.modal-trigger').leanModal();
  if (!window.navigator.onLine) {
    $('.onlineOnly').hide();
    Materialize.toast('OFFLINE: External links removed.', 2000, 'rounded');
  } else {
    Materialize.toast('ONLINE: External links available.', 2000, 'rounded');
  }
  // end of document ready
}(jQuery));
// end of jQuery name space
