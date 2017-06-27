$(document).ready(function(event) {


    // Der Inhalt der Piraterie-Warnhinweise soll in die ISPS-Warnhinweise geladen werden
    var seite = String(window.location).search(/sicherheit\/isps\/warnhinweise/);

    if (seite != -1)

        {
        $('#parent-fieldname-text').after('<div id="ajaxcontent">Content-Core</div>');
        var url = 'http://www-prod.deutsche-flagge.de/de/sicherheit/piraterie/warnhinweise/warnhinweise/CookedBody'
        //var url = 'http://www.deutsche-flagge.de/optiflag/de/sicherheit/piraterie/warnhinweise/warnhinweise/CookedBody'
        $('#ajaxcontent').load(url);

        $.ajaxSetup({cache: false});
        $.ajax({
           type: "GET",
           url:url,
           async:false,
           success: function(html) {
               $('#ajaxcontent').html(html);
               $('#ajaxcontent').css('color','red');
               }
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
    $('.template-default_error_message.site-optiflag #design-credits').before('<div class="df-theme-banner"><img class="banner-image"><div class="banner-text"></div></div>');
    $('.template-default_error_message.site-optiflag .banner-text').html('<h1>Mayday <em>+</em></h1>');
    $('.template-default_error_message.site-optiflag .banner-image').attr('src','http://www.deutsche-flagge.de/en/redaktion-englisch/pictures/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');
    $('.template-default_error_message.site-optiflag .banner-image').attr('title','© Havariekommando www.havariekommando.de');

    $('.template-default_error_message.site-en .banner-text').html('<h1>Mayday <em>+</em></h1>');
    $('.template-default_error_message.site-en .banner-image').attr('src','http://www.deutsche-flagge.de/en/redaktion-englisch/pictures/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');
    $('.template-default_error_message.site-en .banner-image').attr('title','© Havariekommando www.havariekommando.de');

    $('.template-default_error_message.site-de .banner-text').html('<h1>Mayday <em>+</em></h1>');
    $('.template-default_error_message.site-de .banner-image').attr('src','http://www.deutsche-flagge.de/de/redaktion/bilder/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');
    $('.template-default_error_message.site-de .banner-image').attr('title','© Havariekommando www.havariekommando.de');


});
