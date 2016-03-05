# kioskSlides

> simple, offline, html + js slideshow for display computer

Very basic slide show to replace PP on a display computer. HTML + JS allows interactive features in the slides.

I attached an old receipt printer to the display computer to allow visitors to print poems from the slideshow. 

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


