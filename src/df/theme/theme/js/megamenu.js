$(function() {
  "use strict";

  $(document).ready(function() {
    function isSmallScreen() {
      return false;
    }
    var topMegaMenu = $('.top-mega-menu');

    function _in() {
      //$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
      $(this).addClass('open');
      $('.dropdown-menu', this).not('.in .dropdown-menu').show();
      if (isSmallScreen()) {
        $(this).closest('#portal-globalnav').addClass('expand').css({
          'left': '-100%',
          "position": "relative",
          "height": $('.dropdown-menu', this).height() + 80
        });
      }
    }

    function _out() {
      //$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
      $(this).removeClass('open');
      if (isSmallScreen()) {
        $(this).closest('#portal-globalnav').removeClass('expand').attr('style', '');
      }
      $('.dropdown-menu', this).not('.in .dropdown-menu').hide();
    }

    function _in2() {
      //$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
      $(this).addClass('open');
      $('.mega-dropdown-menu-lv2', this).not('.in .dropdown-menu').show();
      if (isSmallScreen()) {
        $(this).closest('#portal-globalnav').addClass('expand').css({
          'left': '-200%',
          "position": "relative",
          "height": $('.mega-dropdown-menu-lv2', this).height() + 80
        });
      }
    }

    function _out2() {
      //$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
      $(this).removeClass('open');
      if (isSmallScreen()) {
        _in.call($($(this).closest('.dropdown')));
      }
      $(this).not('.in .dropdown-menu').hide();
    }


    // hover: only on big menu
    $(".dropdown").hover(function() {
      if (isSmallScreen()) {
        return;
      }
      _in.call(this);
    }, function() {
      if (isSmallScreen()) {
        return;
      }
      _out.call(this);
    });

    // click: only on small menu
    $(".dropdown", topMegaMenu).on("click", function(evt) {
      if (!isSmallScreen()) {
        return;
      }
      if (!$(this).hasClass('open')) {
        evt.preventDefault();
        _in.call(this);
      }
      /*else {
                   evt.preventDefault();
                   _out.call(this);
                 }*/

    });

    // ???
    $(".dropdown .dropdown-header", topMegaMenu).on("click", function(evt) {
      if (!isSmallScreen()) {
        return;
      }
      if (!$(this).hasClass('open')) {
        evt.preventDefault();
        _in2.call(this);
      }
      /*else {
                   evt.preventDefault();
                   _out.call(this);
                 }*/

    });


    // click: only on small menu
    $(".dropdown li.back a", topMegaMenu).on("click", function(evt) {

      evt.preventDefault();
      evt.stopPropagation();
      if ($(this).closest('.mega-dropdown-menu-lv2').length > 0) {
        _out2.call($($(this).closest('.mega-dropdown-menu-lv2')));
      } else {
        _out.call($($(this).closest('.dropdown')));
      }

    });


    // access through keyboard
    $(".dropdown a").keydown(function(evt) {
      if (evt.which !== 13) {
        return;
      }
      var $this = $(this).parent();
      if ($this.is('.open')) {
        // We disabled the close on keypress as in that way users with keyboard
        // devices can't find a way to visit the link itself
        //_out.call($this.get(0));
        return true;
      } else {
        _in.call($this.get(0));
      }
      evt.preventDefault();
      evt.stopPropagation();
    });

    $(window).resize(function() {
      $('#portal-globalnav').removeClass('expand').attr('style', '');
    });

  });

});
