# kioskSlides

> simple, offline, html + js slideshow for display computer, that prints poems

Very basic slide show to replace PP on a display computer. HTML + JS allows interactive features in the slides.

To promote our daily poetry website and have some fun, I attached an old receipt printer to our lobby display computer to allow visitors to print poems. Rather than a self playing PP slide deck, the slide show is a set of HTML pages controlled by JS. Adding print functionality is fairly easy using Chrome kiosk mode and the standard drivers for the POS printer. A mouse is connected to the computer to allow visitors to interact with the slideshow. Right click is disabled and a keyboard is not connected to ensure security.    

The slideshow is controlled by advance.js. The order of slides is given in the `slides` varible. Functions are provided to advance the slide after a set time or after mouse activity has stopped. 

Here are some pictures of the printer, https://twitter.com/VandalPoem/status/694261911685181441

Mentioned in the student newspaper, https://www.uiargonaut.com/2016/02/25/the-poems-of-our-lives-the-vandal-poem-of-the-day-program-works-to-expose-students-to-wide-variety-of-poetry/

Mentioned in Vandal Poem of the Day Labs, http://poetry.lib.uidaho.edu/index.php/labs/

## Set Up Chrome Kiosk Mode

1. Set up printing defaults: 
..* set default printer to receipt
..* under more settings uncheck Headers and footers
2. Create a new Kiosk user and shortcut
..* settings > users > add new user > create shortcut for this user > create
3. Edit the shortcut to add flags enabling kiosk mode and printing without a message 
..* edit > properties > target
..* target should = `chrome.exe --kiosk --kiosk-printing http://[start URL here] --disable-print-preview`
4. Completely shut down Chrome (in task manager) or restart computer.

Start the slideshow by clicking on the shortcut.

To quit press Alt + F4 on keyboard (right click is disabled on the slide pages, so if keyboard is disconnected there is no way to exit the kiosk show).


