$(document).ready(function() {
    // Adds a shortcut to add hold search, with a popup prompt.
    // Working with Koha 18.05.06.000

    // it's hooks on a register class click.
    $(document.body).on('click', '.register', function(event) {
        event.preventDefault();
        var patreon = prompt("Enter patreon name or id", "");

        if (patreon) {
            var url = $(this).attr("href");
            window.open(url + '&findborrower=' + patreon, '_blank');
        }
    });

    if ($('#acq_basket').length) {
        $('#orders').on('init.dt', function() {
            $('#orders').find('tbody').find('tr').each(function() {
                var old = $(this).find("td:eq(1)").html();
                var str = old.substr(old.indexOf('?'));
                var start_pos = str.indexOf("=") + 1;
                var end_pos = str.indexOf('"', start_pos);
                var biblionumber = str.substring(start_pos, end_pos);

                $(this).find("td:eq(1)").append("<span>[<a href='/cgi-bin/koha/reserve/request.pl?biblionumber=" + biblionumber + "' class='register' target='_blank'>Add hold</a>]</span>");
            });
        });
    } // End add hold
});
