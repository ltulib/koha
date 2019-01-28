$(document).ready(function() {
    // Add a confirm message then trying to place patron at the end of hold que.
    // Working with Koha 18.05.06.000

    // Circulation edit page
    if ($('#circ_request').length) {
        $("a").each(function() {
            var value = $(this).attr("href");

            // Search for setLowestPriority and add id.
            if (value.search("setLowestPriority") != -1) {
                $(this).attr('class', 'setLowestPriority_hold');
            }
        });

        // add confirm to setLowestPriority arrow
        $("body").on("click", ".setLowestPriority_hold", function(event) {
            event.preventDefault();

            if (confirm('Vill du verkligen placera låntagaren sist i kön?')) {
                var value = $(this).attr("href");
                window.location.href = value;
            }
        });
    } // End circulation
});
