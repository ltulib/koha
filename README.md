# Koha

All scripts working with Koha 17.11

### Acquisitions_add.js
Modify "new order" page, and adds a drop-down list. The drop-down has been pre-configured with settings for different books and libraries which is the same everytime you add a certain book. On select, forms are updated automatically. 

![Image](https://raw.githubusercontent.com/ltulib/koha/master/img/new_book.png)

Changes on pages like this: **/cgi-bin/koha/acqui/neworderempty.pl?booksellerid=2&basketno=2673&biblionumber=218806**


### Basket.js
Adds two buttons on vendor page for hiding/showing closed baskets in baskets table list.  Koha got this function built in, but it's really slow and not working properly. This script fixes the speed problem and preserving the functionality.

Changes on pages like this: **/cgi-bin/koha/acqui/booksellers.pl?supplier=2&booksellerid=2**


### Ebba.js
Adds a link based on item type (Fjärrlån) at peatron checkouts list to Ebba (Interlibrary loan module) 

Changes on all patron pages, checkout table.


### Focus_modification.js
This is a small script to change in which input form to use for searching under the acquisition tab in Koha. The focus is changed from Title to Basket search. 

Changes on this page: **/cgi-bin/koha/acqui/acqui-home.pl**


### Keyboard_shortcuts.js
Creates a template to add keyboards shortcuts in Koha. At the moment it's only working with a single key press. You can also change behavior depending on the open page.

Keys added is: 
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


### Remove_suspend.js
Three rows script for removing td(8) and th(8) from the table at holdings tab at patron page. We don't want or need suspend button.

Change on holds tab on every patron page.


### Shortcut_addhold.js
Adds a search pop-up and shortcut to "Place a hold" search page from an acquisition vendor basket.  See image below. 

![Image](https://raw.githubusercontent.com/ltulib/koha/master/img/add_hold.png)

Changes on pages like this: **/cgi-bin/koha/acqui/basket.pl?basketno=2616**
