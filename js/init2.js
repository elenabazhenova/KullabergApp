(function jQ2($) {
  // $('.scrollspy')
  //   .scrollSpy();
  // $('ul.tabs').tabs({ swipeable: true, responsiveThreshold: 2000 });
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
  $('.modal')
    .modal();
  if (!window.navigator.onLine) {
    $('.onlineOnly')
      .hide();
    hiddenContact = true;
  }
  // end of document ready
}(jQuery));
// end of jQuery name space
$(document)
  .ready(function start3() {
    // Animate loader to fade out
    $('.loader')
      .finish()
      .delay(300)
      .fadeOut(300, 'linear', function present() {
        $('.logoImg')
          .removeClass('turn');
        $('.btn-floating')
          .removeClass('scale-out');
      });
  });
