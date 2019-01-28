$(document).ready(function() {
    // Hide stuff we don't need then we creates a new patreon.
    // Working with Koha 18.05.06.000

    if ($("#pat_memberentrygen").length) {
        // This script copy input value from #cardnumber to #userid input
        // Copy #cardnumber value to #userid on keyUp
        // Fungerar, kan ta bort dublicering av save.

        $("#cardnumber").keyup(function() {
            $("#userid").val($("#cardnumber").val());
        });

        // just to be sure, Copy #cardnumber value to #userid on change
        $("#cardnumber").change(function() {
            $("#userid").val($("#cardnumber").val());
        });

        // moves #memberentry_userid to after #memberentry_library_management
        $($("#memberentry_userid")).insertAfter($("#memberentry_library_management"));

        // Hide all lists we don't want to see
        $("#memberentry_subscription ol").hide();
        $("#memberentry_patron_attributes ol").hide();
        $("#memberentry_messaging_prefs table").hide();
        $("#memberentry_messaging_prefs p").hide();

        // Add show and hide to legend on the lists we hidden.
        $("#memberentry_subscription legend").click(function() {
            $("#memberentry_subscription ol").toggle("slow");
        });

        $("#memberentry_patron_attributes legend").click(function() {
            $("#memberentry_patron_attributes ol").toggle("slow");
        });

        $("#memberentry_messaging_prefs legend").click(function() {
            $("#memberentry_messaging_prefs table").toggle("slow");
            $("#memberentry_messaging_prefs p").toggle("slow");
        });

        // some fieldset does not have ID, we search for legend name instead
        // and then hide "p" or "ol" we also add a toggle function to legend.
        $("legend").each(function() {
            switch ($(this).html()) {
                case "Patron restrictions":
                    $(this).parent().find("p").hide();
                    $(this).click(function() {
                        $(this).parent().find("p").toggle("slow");
                    });
                    break;
                case "Flaggor för låntagarkonto":
                case "Patron account flags":
                    $(this).parent().find("ol").hide();
                    $(this).click(function() {
                        $(this).parent().find("ol").toggle("slow");
                    });
                    break;
            }
        });

        // No autoselect of city
        $("#select_city").val("");
    } // End patreon creation page.
});
