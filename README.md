# Koha

All scripts working with Koha 18.05.06.000

### Acquisitions_add.js
Modify "new order" page, and adds a drop-down list. The drop-down has been pre-configured with settings for different books and libraries which is the same everytime you add a certain book. On select, forms are updated automatically.

![Image](https://raw.githubusercontent.com/ltulib/koha/master/img/new_book.png)

Changes on pages like this: **/cgi-bin/koha/acqui/neworderempty.pl?booksellerid=2&basketno=2673&biblionumber=218806**


### Check_3d_printer.js
Adds a message if patreon can use the 3d printer or not on this page

**/cgi-bin/koha/members/moremember.pl?borrowernumber=**


### Check_for_debt.js
Adds a check if patreon got a debt or not, then a librarian are renewing a book. It checks with ajax on a php page connected to Koha.


### Check_out_button.js
Disable 2 buttons in Details page. Before Koha 18 this button renew books, but in this version Koha return books.

Changes on pages like this: **/cgi-bin/koha/members/moremember.pl?borrowernumber=**

### Ebba.js
Adds a link based on item type (Fjärrlån) at peatron checkouts list to Ebba (Interlibrary loan module)

Changes on all patron pages, checkout table.


### Focus_modification.js
This is a small script to change in which input form to use for searching under the acquisition tab in Koha. The focus is changed from Title to Basket search.

Changes on this page: **/cgi-bin/koha/acqui/acqui-home.pl**


### iframe_update_width.js
All iframes on Notices page got wrong width, this script just set the width to 100%.

**/cgi-bin/koha/members/notices.pl?borrowernumber=**


### Keyboard_shortcuts.js
Creates a template to add keyboards shortcuts in Koha. At the moment it's only working with a single key press. You can also change behavior depending on the open page.

Keys added is:
F1 - Add a search prompt to advanced ISBN search.
F4 - Back to the main page.
F7 - Change focus to return tab or to return input.
F8 - Change focus to renew tab or to renew input.

Effects all pages.


### Patron_add.js
This script changes the look on creating new patron page.

- Tree forms are hidden (Library set-up, Additional attributes, and identifiers, Patron messaging preferences), we use this form very seldom.

- OPAC/Staff login is moved to after Library management.

- We want Card number and Username to be same string. The information at card number is copied to Username.

- Information in city drop-down list is removed.

Changes on this page: **/cgi-bin/koha/members/memberentry.pl?op=add&categorycode=N**


### printer_hold_popup.js
Adds enter click to reservation pop-up. The script change button between print and approve and color the active one green. Good to combine with autoprint in Firefox/ Chrome


### priority_hold.js
Add a confirm message then trying to place patron at the end of hold que.


### Shortcut_addhold.js
Adds a search pop-up and shortcut to "Place a hold" search page from an acquisition vendor basket.  See image below.

![Image](https://raw.githubusercontent.com/ltulib/koha/master/img/add_hold.png)

Changes on pages like this: **/cgi-bin/koha/acqui/basket.pl?basketno=2616**
