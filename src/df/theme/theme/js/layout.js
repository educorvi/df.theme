$(document).ready(function() {

function deutschflagge_init(){
   
  if (window.matchMedia("(max-width: 480px)").matches) {

      $footer_nl_label = $('.footer-newsletter label');
      $footer_nl_input = $('.footer-newsletter input');
      $footer = $('#portal-footer');

      $footer_nl_label.addClass('footer_nl');

      $footer.on('click', function(e) {
          if ($(e.target).hasClass('footer_nl') || $(e.target).hasClass('emailButton') || $(e.target).hasClass('emailInput')) {
              $footer_nl_label.addClass('nl-hide');
          } else {
              $footer_nl_label.removeClass('nl-hide');
          }

      });

  }

  if (window.matchMedia("(max-width: 770px)").matches) {

      $('#portal-footer header').on('click', function(event){
        event.preventDefault();
        $(this).closest('section').find('.portletContent').toggle()
      });
  }

  // Instantiate the Bootstrap carousel

  $('.carousel').each(function(){
    var data_items = window.matchMedia("(max-width: 770px)").matches ? 1 : $(this).data('items');
    carousel = $(this); 
    if ($('.item', $(this)).length > data_items){
      carousel.carousel({
        interval: false
      });
      if (! window.matchMedia("(max-width: 770px)").matches){
        $('.item', carousel).each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));

          for (var i=0;i<1;i++) {
            next=next.next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
          }
        }); 
      }
    } else {
        $('.item', $(this)).addClass('active');
        //$('.carousel-control', $(this)).hide();
    }
  });
  
  $('#sidebar, #main-container > header').matchHeight();
  $('.template-purecardsview .cards-link').matchHeight();
  $('#sidebar, #content').matchHeight();
  $('.shortcut-header, .shortcuts-navbar-nav').matchHeight();
}

deutschflagge_init();

$(window).resize(function(){ deutschflagge_init(); });

});
