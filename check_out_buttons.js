$(document).ready(function() {
    // Removes two buttons from cgi-bin/koha/members/moremember.pl?borrowernumber=[borrowernumber]
    // Working with Koha 18.05.06.000

    if ($('#pat_moremember').length) {
        if ($('#RenewCheckinChecked').length) {

            var element = document.getElementById("RenewCheckinChecked");

            element.disabled = true;

            element = document.getElementById("RenewAll");
            element.disabled = true;
        }
    } // End remove buttons
});
