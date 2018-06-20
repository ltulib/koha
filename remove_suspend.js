$(document).ready(function() {
    $('#holds-table').on("DOMSubtreeModified", function() {
        $('#holds-table tr').find('td:eq(8), th:eq(8)').remove();
    });
});
