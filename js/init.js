  (function jQ($) {
      $('.modal-trigger')
        .leanModal($('.btn-floating.btn-large.red')
          .click(function hamburger() {
            $('.nav-icon4')
              .toggleClass('open');
          }); $('.tabs-wrapper')
          .pushpin({
            top: $('.tabs-wrapper')
              .offset()
              .top,
          });
          /*
           ██████  ███    ██ ██      ██ ███    ██ ███████
          ██    ██ ████   ██ ██      ██ ████   ██ ██
          ██    ██ ██ ██  ██ ██      ██ ██ ██  ██ █████
          ██    ██ ██  ██ ██ ██      ██ ██  ██ ██ ██
           ██████  ██   ████ ███████ ██ ██   ████ ███████
          */
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
      // Animate loader to fade out
      $('.loader')
        .finish()
        .fadeOut(600, 'easeOutSine', function present() {
          $('.logoImg')
            .removeClass('turn');
          $('.btn-floating')
            .removeClass('bounceIn');
        });
    });
