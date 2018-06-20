$(document).ready(function() {
    // Adds a dropdown menu then adding a new book in Acquisitions.
    // The script fills in common information into book item based on
    // predefined configuration. Like which library, location etc.

    // Working with Koha 17.11
    // Magnus Pettersson mail: magnus.pettersson@ltu.se

    if ($('#acq_neworderempty').length) {
        var html = ' \
          <fieldset class="rows"> \
            <legend>New book</legend> \
            <ol> \
                <li> \
                    <span class="label">Prepare form for:</span> \
                    <div style="float:left"> \
                        <ul id="users_names" style="padding-left:0"> \
                        <select id="dropdown_book"> \
                          <option value="">Choose</option> \
                          <option value="book">Book</option> \
                          <option value="cbook">Course book</option> \
                          <option value="rbook">Ref book</option> \
                          <option value="pbook">Piteå</option> \
                          <option value="sbook">Skellefteå</option> \
                          </select> \
                        </ul> \
                    </div> \
                </li> \
            </ol> \
          </fieldset>';

        $("#acqui_basket_summary").append(html);
    }

    $('#dropdown_book').change(function() {
        var q = $('#dropdown_book').val();

        $("#subfield7").first().find("select").val(-1);
        $("#subfield8").first().find("select").val("ENTRE");
        $("#subfieldy").first().find("select").val(91);

        switch (q) {
            case "book":
                $("#budget_id").val(41);
                break;
            case "cbook":
                $("#budget_id").val(42);
                break;
            case "rbook":
                $("#subfield8").first().find("select").val("KURS");
                $("#budget_id").val(42);
                break;
            case "pbook":
                $("#subfielda").first().find("select").val("LAM");
                $("#subfieldb").first().find("select").val("LAM");
                $("#budget_id").val(43);
                break;
            case "sbook":
                $("#subfielda").first().find("select").val("LAT");
                $("#subfieldb").first().find("select").val("LAT");
                $("#budget_id").val(46);
                break;
        }
    });
});
