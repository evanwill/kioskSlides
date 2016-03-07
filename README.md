# kioskSlides

> simple, offline, html + js slideshow for display computer, that prints poems

Very basic slide show to replace PP on a display computer. HTML + JS allows interactive features in the slides.

To promote our daily poetry website and have some fun, I attached an old receipt printer to the display computer to allow visitors to print poems. Adding print functionality is fairly easy using Chrome kiosk mode.  

Here are some pictures of the printer, https://twitter.com/VandalPoem/status/694261911685181441

Mentioned in the student newspaper, https://www.uiargonaut.com/2016/02/25/the-poems-of-our-lives-the-vandal-poem-of-the-day-program-works-to-expose-students-to-wide-variety-of-poetry/

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


