$(document).ready(function() {
    // Working with Koha 18.05.06.000
    // Magnus Pettersson mail: magnus.pettersson@ltu.se

    // Shortcuts
    // Adds F1, F4, F7 and F8 as shortcuts in Koha

    // F1, shortcut to ISBN search
    shortcut.add('F1', function() {
        var isbn = prompt("Enter ISBN:", "");

        if (isbn != null || isbn == '') {
            location.href = '/cgi-bin/koha/catalogue/search.pl?idx=nb&q=' + isbn + '&op=and&idx=kw&op=and&idx=kw&sort_by=relevance'
        }
    }); // end F1

    // F4, return to front page
    shortcut.add('F4', function() {
        location.href = "/cgi-bin/koha/mainpage.pl";
    }); // end F4

    // F7, check in books
    shortcut.add('F7', function() {
        var id = $('body').attr('id');

        if ($("#circ_returns").length) {
            $("#barcode").focus();
        }
        else if ($("#circ_renew").length) {
            $("#barcode").focus();
        }
        else if (id.indexOf("pat_") != -1) {
            $('#ui-id-3').trigger('click');
        }
        else {
            $('#ui-id-2').trigger('click');
        }
    }); // end F7

    // F8, check out books
    shortcut.add('F8', function() {
        var id = $('body').attr('id');

        if ($("#circ_returns").length) {
            $('#ui-id-1').trigger('click');
            $("#findborrower").focus();
        }
        else if ($("#circ_renew").length) {
            $('#ui-id-1').trigger('click');
            $("#findborrower").focus();
        }
        else if (id.indexOf("pat_") != -1) {
            $('#ui-id-2').trigger('click');
        }
        else {
            $('#ui-id-1').trigger('click');
        }
    }); // end F8
    // End shortcut
});
