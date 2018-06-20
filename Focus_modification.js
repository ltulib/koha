$(document).ready(function() {
    // Change default search in Acquisitions to basket search

    // Working with Koha 17.11
    // Magnus Pettersson mail: magnus.pettersson@ltu.se

    if ($('#acq_acqui-home').length) {
        $('#ui-id-2').trigger('click');
        $('#filteraction_on').find(".toggle_element").trigger('click');
        $('#basket').focus();
    }
});
