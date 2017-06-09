$(document).ready(function(event) {

    // Anpassungen der Sucheinstellungen
    $('#search-filter-toggle').hide();
    $('cite').hide();

    $('#search-results a').each(function(index) {
        var link = $(this).attr("href").replace('/view','/download');
        $(this).attr("href",link);
    });

    var seite = String(window.location).search(/SearchableText/);

    if (seite != -1)

    { 
        $('header .documentFirstHeading').hide();
    }


    // Anpassungen bei einer Fehlerseite
    $('.template-default_error_message.site-en .banner-text').html('<h1>Mayday <em>+</em></h1>');
    $('.template-default_error_message.site-en .banner-image').attr('src','http://www.deutsche-flagge.de/en/redaktion-englisch/pictures/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');
    $('.template-default_error_message.site-en .banner-image').attr('title','© Havariekommando www.havariekommando.de');

    $('.template-default_error_message.site-de .banner-text').html('<h1>Mayday <em>+</em></h1>');
    $('.template-default_error_message.site-de .banner-image').attr('src','http://www.deutsche-flagge.de/de/redaktion/bilder/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');
    $('.template-default_error_message.site-de .banner-image').attr('title','© Havariekommando www.havariekommando.de');


});
