$(document).ready(function() {
    // Change default search in Acquisitions to basket search
    // Working with Koha 18.05.06.000

    if ($('#acq_acqui-home').length) {
        $('#ui-id-2').trigger('click');
        $('#filteraction_on').find(".toggle_element").trigger('click');
        $('#basket').focus();
    } // End settings
});
