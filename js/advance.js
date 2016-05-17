// kioskSlides slide advance script

// array of slides. insert slide order here
var slides = [ 
    "fullSlide.html",
    "poem.html",
    "photoSlide.html",
    "randompoem.html"
    ];

// get current slide
var locate = window.location;

// regex function to reduce location to file name
function filename(slide) {
        return slide == /\w+?\.html/.exec(locate);
}

// function to advance the slides in a loop
function advance() {     
    var nextSlide = slides.findIndex(filename) +1;
    if (nextSlide === slides.length) {
    window.location = slides[0];
    } else {
    window.location = slides[nextSlide];
    } 
}

// function to advance to poem slide
function getpoem() {
    window.location = "poem.html";
}

// function to advance on click or timeout 
// slide Option #1, call in body 
function advanceTimeout() {
    var t;
    window.onload = resetTimer;
    // option to advance the slide on a click 
    // window.onclick = advance; 
    // or jump to poem slide
    window.onclick = getpoem;

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(advance, 15000)
        // 1000 milisec = 1 sec
    }
}

// function to wait while mouse is active
// slide Option #2, call in body
function activeWait() {
    var t2;
    window.onload = resetTimer2;
    document.onmousemove = resetTimer2;
    document.onkeypress = resetTimer2;

    function resetTimer2() {
        clearTimeout(t2);
        t2 = setTimeout(advance, 15000)
        // 1000 milisec = 1 sec
    }
}
