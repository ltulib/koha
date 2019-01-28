$(document).ready(function() {
    // Changes width on iframe(s) from cgi-bin/koha/members/notices.pl?borrowernumber=[borrowernumber]
    // Working with Koha 18.05.06.000

    if ($('#pat_notices').length) {
        $("iframe").each(function() {
            $(this).css({ "width": "100%" });
        });
    }
});
