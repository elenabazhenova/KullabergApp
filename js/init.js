(function jQ($) {
  $('.button-collapse').sideNav({
    menuWidth: 320,
    // Default is 240
    edge: 'left',
    // Choose the horizontal origin
    closeOnClick: true,
    // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  $('.scrollspy').scrollSpy();
  $('.slider').slider({
    full_width: true,
    indicators: true,
    height: 600,
    transition: 500,
    interval: 6000,
  });
  $('.modal-trigger').leanModal();
  $('.hidden').hide();
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
  });
  $('.tabs-wrapper').pushpin({
    top: $('.tabs-wrapper').offset().top,
    offset: $('.nav-wrapper').height(),
  });
  $('.collapsible').collapsible({
    accordion: false,
  });
  // end of document ready
}(jQuery));
// end of jQuery name space
