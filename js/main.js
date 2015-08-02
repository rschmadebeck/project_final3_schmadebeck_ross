//Hamburger Nav JS

// (function ($) {

//     $('body').jvmobilemenu({
//         notMenuClick: $('.page'),
//         slideSpeed: 0.3,
//         menuWidth: 240
//     });

// })(jQuery);

$.jvmobilemenu({
    mainContent: $('.page'),
    theMenu: $('.mobile-nav'),
    slideSpeed: 0.3,
    menuWidth: 240,
    position: 'right',
    menuPadding: '20px 20px 60px'
});

// $('body').jvmobilemenu({

// // selector to click outside menu to close
// notMenuClick: $('.page'),

// // speed to open and close menu
// slideSpeed: 0.3,

// // width of the mobile menu
// menuWidth: 240

// });
