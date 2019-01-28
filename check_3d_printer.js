$(document).ready(function() {
    // Add a message to patrion check out page. what they can use 3d printer
    // Working with Koha 18.05.06.000

    if ($('#circ_circulation').length) {
        console.log("Running circ");
        var url = window.location.href;
        var id = url.split('=');
        var $tmp_div = $('<div>');

        $tmp_div.load("https://ils.lib.ltu.se/cgi-bin/koha/members/moremember.pl?borrowernumber=" + id[1] + " div#aai", function() {
            // Did we find a 3d-printer?
            var wordStr = "ja";
            var wordRegex = new RegExp("\\b" + wordStr + "\\b", "gi");
            var matchRez = $(this).text().match(wordRegex);
            var wordCount = matchRez ? matchRez.length : 0;

            if (wordCount > 1) {
                $("#messages").after('<div class="circmessage">Behörig att använda 3d-skrivare</div>');
            }

            $(this).remove();
            delete wordStr, wordRegex, matchRez, wordCount;
        });
    }
});
