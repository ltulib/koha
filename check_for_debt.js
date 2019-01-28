// Javascript code

// Check for depts in Koha database and ads a confirm
// Working with Koha 18.05.06.000

// getJSON: Get dept from remote server base on barcode
function check_for_patreon_debt(barcode, element) {
    console.log("jQuery: Check dept")
    $.getJSON("https://mypages.lib.ltu.se/account_status_koha.php?barcode=" + barcode + "&callback=?", function(jsonp) {
            // Check dept
            if (parseInt(jsonp.debt) >= 50) {
                // Found dept, ask for confirm.
                if (confirm("Är du säker på att du vill förnya boken? Låntagaren har " + parseInt(jsonp.debt).toFixed(0) + " kr i skuld!")) {
                    console.log("getJSON: Unlocking bound elements and click.");
                    $(element).closest("form").off('submit').submit();
                }
            } else {
                console.log("getJSON: No dept");
                $(element).closest("form").off('submit').submit();
            }
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("getJSON: Request Failed: " + err);
            $(element).closest("form").off('submit').submit();
        });
}

// Adds a warning on renew book from search bar.
$('#ren_barcode').parent().on('submit', function(event) {
    var barcode = $("#ren_barcode").val();

    if (barcode.length) {
        event.preventDefault();
        check_for_patreon_debt(barcode, "#ren_barcode");
    }
});

// Adds a warning on renew book from renew.pl page.
if ($('#circ_renew').length) {
    $('#barcode').closest("form").on('submit', function(event) {
        event.preventDefault();
        var barcode = $("#barcode").val();
        check_for_patreon_debt(barcode, "#barcode");
    });
} // end getjson


// PHP code, needs to be on Koha server with access to the databases

<?php
header('Content-Type: application/json');

$lineBreak = "\n";

require_once "/var/www/html/ebba/db/mysqli.php";
require_once "/var/www/html/ebba/libs/request.php";

global $conn_koha;

try {

    $request = new REQUEST();

    $borrowernumber = $request->get_number('borrowernumber');
    $barcode = $request->get_array('barcode');

    if (empty($borrowernumber) && empty($barcode)) {
        exit();
    }

    if (!empty($borrowernumber)) {
        $sql = "SELECT sum(amountoutstanding) as `debt` FROM `accountlines` WHERE borrowernumber='$borrowernumber'";

        $result = $conn_koha->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $outJSON = json_encode( $row );
        }
    } else {
        $sql = "SELECT sum(amountoutstanding) as `debt` FROM `accountlines` WHERE borrowernumber in (select borrowernumber from issues where itemnumber in (select itemnumber from items where barcode='$barcode'))";

        $result = $conn_koha->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $outJSON = json_encode( $row );
        }
    }
    $conn_koha->close();

    echo $_GET['callback'] . "(" . $outJSON . ")";

    exit();

} catch (Exception $e) {
    echo 'Caught exception: ' . $e->getMessage() . $lineBreak;
    sendAdminMail('[account_status_koha.php] Caught exception', "Caught exception:<br ><br ><br ><pre >" . $e->getMessage() . "<br ><br ></pre >");
}

exit();
?>
