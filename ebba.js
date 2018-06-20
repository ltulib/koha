$(document).ready(function() {
    $('#issues-table').on('init.dt', function() {
        $('#issues-table tr').each(function() {
            if ($(this).find("td:eq(2)").html() == "Fjärrlån") {
                var old = $(this).find("td:eq(1)").html();
                var str = old.substr(old.indexOf('?'));
                var start_pos = str.indexOf("=") + 1;
                var end_pos = str.indexOf('"', start_pos);
                var biblionumber = str.substring(start_pos, end_pos);

                $(this).find("td:eq(2)").html("<a href='https://ils.lib.ltu.se/ebba/koha_ebba_redirect.php?biblionumber=" + biblionumber + "' target=_blank >Fjärrlån</a>")
            }
        })
    });
});
