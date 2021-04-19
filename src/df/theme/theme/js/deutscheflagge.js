$(document).ready(function(event) {

    // IFRAME Border müssen weg
    $('iframe').css('border','None');

    // der Seitentitel erhält noch eine ID als Sprungmarke
    $('.documentFirstHeading').attr('id','documentFirstHeading');

    // Abstand der Hafenstaatkontrolle
    $("li.section-psc").before('<li class="navTreeItem visualNoMarker navTreeFolderish section-none"></li>');
    $("li.section-pscen").before('<li class="navTreeItem visualNoMarker navTreeFolderish section-none"></li>');


    // Anpassungen der Sucheinstellungen
    $('#search-filter-toggle').hide();
    $('cite').hide();

    $('#search-results a').each(function(index) {
        var link = $(this).attr("href").replace('/view','/download');
        $(this).attr("href",link);
    });

    // Beim Gefahrenabwehrplan sollen geschützte Leerzeichen rein
    var seite = String(window.location).search(/gefahrenabwehrplan/);

    if (seite != -1)
    {
        $('#documentFirstHeading').html("Gefahrenabwehrplan (International&nbsp;·&nbsp;National)")
    };

    // Überschrift auf der Suchseite ausblenden
    var seite = String(window.location).search(/SearchableText/);

    if (seite != -1)

    { 
        $('header .documentFirstHeading').hide();
    };


    // Anpassungen bei einer Fehlerseite
    $('.template-default_error_message.site-optiflag #portal-breadcrumbs').before('<div class="df-theme-banner"><img class="banner-image"><div class="banner-text"></div></div>');
    $('.template-default_error_message.site-optiflag .banner-text').html('<div class="bildtitel">Mayday <em>+</em></div>');
    $('.template-default_error_message.site-optiflag .banner-image').attr('src','https://www.deutsche-flagge.de/en/redaktion-englisch/pictures/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');
    $('.template-default_error_message.site-optiflag .banner-image').attr('title','© Havariekommando www.havariekommando.de');

    $('.template-default_error_message.site-en .banner-text').html('<div class="bildtitel">Mayday <em>+</em></div>');
    $('.template-default_error_message.site-en .banner-image').attr('src','https://www.deutsche-flagge.de/en/redaktion-englisch/pictures/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');
    $('.template-default_error_message.site-en .banner-image').attr('title','© Havariekommando www.havariekommando.de');

    $('.template-default_error_message.site-de .banner-text').html('<div class="bildtitel">Mayday <em>+</em></div>');
    $('.template-default_error_message.site-de .banner-image').attr('src','https://www.deutsche-flagge.de/de/redaktion/bilder/titelbilder/fehlermeldung-havariekommando.jpg/@@images/image');
    $('.template-default_error_message.site-de .banner-image').attr('title','© Havariekommando www.havariekommando.de');

    // Anpassungen bei der Suchseite
    $('.template-search.site-optiflag #searchform').before('<div class="df-theme-banner"><img class="banner-image"><div class="banner-text"></div></div>');
    $('.template-search.site-optiflag .banner-text').html('<div class="bildtitel">PEILUNG <em>+</em></div><div class="bildtitel">HABEN</div>');
    $('.template-search.site-optiflag .banner-image').attr('src','https://www.deutsche-flagge.de/en/redaktion-englisch/pictures/titelbilder/header-kontakt.jpg/@@images/image');
    $('.template-search.site-optiflag .banner-image').attr('title','© Kirk Williams');

    $('.template-search.site-en #searchform').before('<div class="df-theme-banner"><img class="banner-image"><div class="banner-text"></div></div>');
    $('.template-search.site-en .banner-text').html('<div class="bildtitel">GIVING <em>+</em></div><div class="bildtitel">ORIENTATION</div>');
    $('.template-search.site-en .banner-image').attr('src','https://www.deutsche-flagge.de/en/redaktion-englisch/pictures/titelbilder/header-kontakt.jpg/@@images/image');
    $('.template-search.site-en .banner-image').attr('title','© Kirk Williams');

    $('.template-search.site-de #searchform').before('<div class="df-theme-banner"><img class="banner-image"><div class="banner-text"></div></div>');
    $('.template-search.site-de .banner-text').html('<div class="bildtitel">PEILUNG <em>+</em></div><div class="bildtitel">HABEN</div>');
    $('.template-search.site-de .banner-image').attr('src','https://www.deutsche-flagge.de/de/redaktion/bilder/titelbilder/header-kontakt.jpg/@@images/image');
    $('.template-search.site-de .banner-image').attr('title','© Kirk Williams');


});
