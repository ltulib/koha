$(document).ready(function() {
  // Hide all closed baskets and add buttons to make them visibe/ hidden again.
  // Working with Koha 17.05
  // Magnus Pettersson mail: magnus.pettersson@ltu.se

  if ($('#acq_booksellers').length) {

    // Add on/ off functions
    $(document.body).on('click', '#baskets_on', function(event) {
      event.preventDefault();
      $(".done").show();
    });

    $(document.body).on('click', '#baskets_off', function(event) {
      event.preventDefault();
      $(".done").hide();
    });

    // Add on/ off buttons to html
    $("#toolbar").append('<a class="btn btn-default btn-sm" id="baskets_on" href="#">Visa stängda korgar</a> ');
    $("#toolbar").append('<a class="btn btn-default btn-sm" id="baskets_off" href="#">Dölj stängda korgar</a> ');

    // Add done class to table tr
    $('.baskets').one("DOMSubtreeModified", function() {
      $('#DataTables_Table_0 tr').each(function() {
        if ($(this).find("td:eq(8)").text().trim() != "") {
          $(this).closest('tr').addClass("done");
        }
      });
      $(".done").hide();
    });
  }
});
