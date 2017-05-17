$(document).ready(function(event) {


    // Bildwechsel beim Mapping - deutsch
    var seite = String(window.location).search(/organigramme/);

    if (seite != -1)

    {

        $('#content-core area').mouseenter(function() {
            var bildsrc = $(this).attr('id') + '_ds.jpg';
            $("#content-core img").attr("src", bildsrc);
        });
        $('#content-core area').mouseleave(function() {
            $("#content-core img").attr("src","organigramm_ds.jpg");
        });


    };


    // Bildwechsel beim Mapping - englisch
    var seite = String(window.location).search(/organigrams/);

    if (seite != -1)

    {

        $('#content-core area').mouseenter(function() {
            var bildsrc = $(this).attr('id') + '_ds.jpg';
            $("#content-core img").attr("src", bildsrc);
        });
        $('#content-core area').mouseleave(function() {
            $("#content-core img").attr("src","organigram_ds.jpg");
        });


    };


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
    $('.template-default_error_message.site-en .banner-image').attr('src','http://www-test.deutsche-flagge.de/en/redaktion-englisch/pictures/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');

    $('.template-default_error_message.site-de .banner-text').html('<h1>Mayday <em>+</em></h1>');
    $('.template-default_error_message.site-de .banner-image').attr('src','http://www-test.deutsche-flagge.de/de/redaktion/bilder/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');


});
