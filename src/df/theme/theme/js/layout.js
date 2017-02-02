$(document).ready(function() {

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

$('#sidebar, #main-container > header').matchHeight();
// Instantiate the Bootstrap carousel
$('.carousel').carousel({
  interval: false
});

$('.carousel .item').each(function(){
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
});
