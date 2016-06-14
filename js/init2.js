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
    hiddenContact = true;
  }
  // end of document ready
}(jQuery));
// end of jQuery name space
$(window)
  .load(function start2() {
    $('footer')
      .fadeOut(0);
    $('main')
      .slideUp(0)
      .finish()
      .delay(1200)
      .slideDown(800, 'easeInQuart', function turnOff2() {
        $('.logoImg')
          .removeClass('turn');
        $('footer')
          .fadeIn();
      });
    // Animate loader to fade out
    $('.loader')
      .finish()
      .delay(800)
      .fadeOut(800, 'easeOutSine');
  });
