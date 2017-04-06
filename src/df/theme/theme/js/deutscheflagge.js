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


});
