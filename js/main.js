//Hamburger Nav JS

$.jvmobilemenu({
    mainContent: $('.page'),
    theMenu: $('.mobile-nav'),
    slideSpeed: 0.3,
    menuWidth: 240,
    position: 'right',
    menuPadding: '20px 20px 60px'
});

// Open Closed jQuery

var d = new Date();
var hour = d.getHours();
var mins = d.getMinutes();
var status = 'open';

if ( hour <= 23){
    if (hour=='11' && mins < '00'){
        status = 'closed';
    }else if (hour=='23' && mins > '00'){
        status = 'closed';
    }else{
        status = 'open';
    }
}else{
    status = 'closed';
}

if (status=='open') {
    $('.hours').show();
    $('.closed').hide();
}else{
    $('.hours').hide();
    $('.closed').show();
}

//ScrollUp jQuery

$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: 'Scroll to top', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: true,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });
});
