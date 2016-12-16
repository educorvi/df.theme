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

    })

}






















})
