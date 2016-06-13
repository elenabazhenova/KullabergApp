(function jQ($) {
  // $('.scrollspy')
  //   .scrollSpy();
  $('.btn-floating.btn-large.red')
    .click(function hamburger() {
      $('.nav-icon4')
        .toggleClass('open');
    });
  $('.tabs-wrapper')
    .pushpin({
      top: $('.tabs-wrapper')
        .offset()
        .top,
      // offset: $('.nav-wrapper').height(),
    });
  $('.modal-trigger')
    .leanModal();
  if (!window.navigator.onLine) {
    $('.onlineOnly')
      .hide();
  }
  // end of document ready
}(jQuery));
// end of jQuery name space
$(window)
  .load(function start2() {
    $('main')
      .slideUp();
    // Animate loader to fade out
    $('.loader')
      .delay(800)
      .fadeOut(700, 'easeInOutCubic');
    $('main')
      .delay(1200)
      .slideDown(800, 'easeInOutCubic');
  });
