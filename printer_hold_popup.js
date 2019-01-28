$(document).ready(function() {
    // Adds enter click to reservation pop-up. The script change button between
    // print and approve and color the active one green.
    // Good to combine with autoprint in Firefox/ Chrome

    // Working with Koha 18.05.06.000

    if ($('#hold-found1').length || $('#hold-found2').length) {
        // Get library name and interlibrary
        var home = $(".logged-in-branch-code:first").text();
        var send = $("input[name=diffBranch]").val();

        // Change background to green on .print or .approve buttons
        var element = home == send ? '.print' : '.approve';

        // add css to button
        $(element).css({
            'background-image': '-webkit-gradient(linear, left top, left bottom, color-stop(0, #a8e063 ), to(#56ab2f))',
            'background-color': '#56ab2f'
        }); // css

        // add enter to element
        shortcut.add('Enter', function() {
            shortcut.remove('Enter');
            $(element).click();
            element = "";
        }); // enter
    } // circ_returns

});
