(function jQ($) {
  $('.scrollspy').scrollSpy();
  $('.btn-floating.btn-large.red').click(function hamburger() {
    $('.nav-icon4').toggleClass('open');
  });
  $('.tabs-wrapper').pushpin({
    top: $('.tabs-wrapper').offset().top,
    // offset: $('.nav-wrapper').height(),
  });
  // end of document ready
}(jQuery));
// end of jQuery name space
