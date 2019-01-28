$(document).ready(function() {
    // Adds autofill new book at cgi-bin/koha/acqui/neworderbiblio.pl
    // Working with Koha 18.05.06.000

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
                <option value="la">La Book</option> \
                <option value="lac">LA Course book</option> \
                <option value="lar">LA Ref book</option> \
                <option value="lam">LAM Book</option> \
                <option value="lamc">LAM Course book</option> \
                <option value="lamr">LAM Ref book</option> \
                <option value="lat">LAT Book</option> \
                <option value="latc">LAT Course book</option> \
                <option value="latr">LAT Ref book</option> \
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
        // $("#subfieldy").first().find("select").val(91);

        switch (q) {
            case "la":
                $("#subfield8 select[name=field_value]").val("ENTRE");
                $("#subfielda select[name=field_value]").val("LA");
                $("#subfieldb select[name=field_value]").val("LA");
                $("#subfieldy select[name=field_value]").val(28);
                $("#budget_id").val(41); // 100
                break;
            case "lac":
                $("#subfield8 select[name=field_value]").val("ENTRE");
                $("#subfielda select[name=field_value]").val("LA");
                $("#subfieldb select[name=field_value]").val("LA");
                $("#subfieldy select[name=field_value]").val(15);
                $("#budget_id").val(42); // 120
                break;
            case "lar":
                $("#subfield8 select[name=field_value]").val("KURS");
                $("#subfielda select[name=field_value]").val("LA");
                $("#subfieldb select[name=field_value]").val("LA");
                // $("#subfieldy select[name=field_value]").val(90);
                $("#subfieldy select[name=field_value]").val(15);
                $("#budget_id").val(42); // 120
                break;
            case "lam":
                $("#subfield8 select[name=field_value]").val("ENTRE");
                $("#subfielda select[name=field_value]").val("LAM");
                $("#subfieldb select[name=field_value]").val("LAM");
                $("#subfieldy select[name=field_value]").val(28);
                $("#budget_id").val(43); // 460
                break;
            case "lamc":
            case "lamr":
                $("#subfield8 select[name=field_value]").val("ENTRE");
                $("#subfielda select[name=field_value]").val("LAM");
                $("#subfieldb select[name=field_value]").val("LAM");
                $("#subfieldy select[name=field_value]").val(15);
                $("#budget_id").val(43); // 460
                break;
            case "lat":
                $("#subfield8 select[name=field_value]").val("ENTRE");
                $("#subfielda select[name=field_value]").val("LAT");
                $("#subfieldb select[name=field_value]").val("LAT");
                $("#subfieldy select[name=field_value]").val(28);
                $("#budget_id").val(46); // 490
                break;
            case "latc":
                $("#subfield8 select[name=field_value]").val("ENTRE");
                $("#subfielda select[name=field_value]").val("LAT");
                $("#subfieldb select[name=field_value]").val("LAT");
                $("#subfieldy select[name=field_value]").val(15);
                $("#budget_id").val(46); // 490
                break;
            case "latr":
                $("#subfield8 select[name=field_value]").val("KURS");
                $("#subfielda select[name=field_value]").val("LAT");
                $("#subfieldb select[name=field_value]").val("LAT");
                // $("#subfieldy select[name=field_value]").val(15);
                $("#subfieldy select[name=field_value]").val(90);
                $("#budget_id").val(46); // 490
                break;
        }
    }); // end autofill.
});
