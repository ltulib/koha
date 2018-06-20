# Koha


### Acquisitions_add.js
Modify "new order" page, and adds a drop-down list. The drop-down has been pre-configured with settings for different books and libraries which is the same everytime you add a certain book. On select, forms are updated automatically. 

![Image](/Users/magpet/Documents/medley/resources/Syq0c_Dbm_SkQmetPbQ.png)

Changes on pages like this: **/cgi-bin/koha/acqui/neworderempty.pl?booksellerid=2&basketno=2673&biblionumber=218806**


### Basket.js
Adds two buttons on vendor page for hiding/showing closed baskets in baskets table list.  Koha got this function built in, but it's really slow and not working properly. This script fixes the speed problem and preserving the functionality.

Changes on pages like this: **/cgi-bin/koha/acqui/booksellers.pl?supplier=2&booksellerid=2**


### Focus_modification.js
This is a small script to change in which input form to use for searching under the acquisition tab in Koha. The focus is changed from Title to Basket search. 

Changes on this page: **/cgi-bin/koha/acqui/acqui-home.pl**


### Keyboard_shortcuts.js
Creates a template to add keyboards shortcuts in Koha. At the moment it's only working with a single key press. You can also change behavior depending on the open page.

Keys added is: 
F4 - Back to the main page.
F7 - Change focus to return tab or to return input.
F8 - Change focus to renew tab or to renew input.


### Shortcut_addhold.js
Adds a search pop-up and shortcut to "Place a hold" search page from an acquisition vendor basket.  See image below. 

![Image](/Users/magpet/Documents/medley/resources/Syq0c_Dbm_BJpFTuvW7.png)

Changes on pages like this: **/cgi-bin/koha/acqui/basket.pl?basketno=2616**