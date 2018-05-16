$(document).ready(function() {
    // Creates a shortcut to default page in KOHA (F4 key)
    // F1 to F12 is among 112 and 123.
    
    // Working with Koha 17.05
    // Magnus Pettersson mail: magnus.pettersson@ltu.se

    $("body").keydown(function(event) {
        var id = $('body').attr('id');
        var keyCode = event.keyCode || event.which;

        switch (keyCode) {
            case 115:
                // F4
                event.preventDefault();
                window.location.href = "https://ils.lib.ltu.se/cgi-bin/koha/mainpage.pl";
                break;
            case 118:
                // F7. We want to change F7 behavior depends on which page we are using.
                // So we set up a different rule on: Returns, Renew, Patron and a default
                if ($("#circ_returns").length) {
                    $("#barcode").focus();
                }
                else if ($("#circ_renew").length) {
                    $("#barcode").focus();
                }
                else if (id == "pat_") {
                    $('#ui-id-3').trigger('click');
                }
                else {
                    $('#ui-id-2').trigger('click');
                }
                break;
            case 119:
                // F8. We want to change F8 behavior depends on which page we are using.
                // So we set up a different rule on: Returns, Renew, Patron and a default
                if ($("#circ_returns").length) {
                    $('#ui-id-1').trigger('click');
                    $("#findborrower").focus();
                }
                else if ($("#circ_renew").length) {
                    $('#ui-id-1').trigger('click');
                    $("#findborrower").focus();
                }
                else if (id == "pat_") {
                    $('#ui-id-2').trigger('click');
                }
                else {
                    $('#ui-id-1').trigger('click');
                }
                break;
        }

        // console.log( "KeyCode: " + keyCode );
        // console.log( "PageID: " + id );
    });
});
