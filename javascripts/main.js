TweenMax.from(".navbar-custom", 1.5, {backgroundColor: "#eee", yPercent:-50});
TweenMax.to(".navbar-custom", 2.5, {borderBottomWidth: 1, borderBottomColor:"#EEE", backgroundColor: "#fff"});

// Smooth scroll to ABOUT from nav
$("#aboutButton").click(function(){
    $("html, body").animate({scrollTop: $("#about").offset().top}, 1000);
});

// Smooth scroll to ABOUT from button
$("#circleAboutButton").click(function(){
    $("html, body").animate({scrollTop: $("#about").offset().top}, 1000);
});

// Smooth scroll to PORT from nav
$("#portButton").click(function(){
    $("html, body").animate({scrollTop: $("#portfolio").offset().top}, 1000);
});

// Smooth scroll to CONTACT from nav
$("#contactButton").click(function(){
    $("html, body").animate({scrollTop: $("#about").offset().top}, 1000);
});

// Smooth scroll to INTRO from nav
$("#introButton").click(function(){
    $("html, body").animate({scrollTop: $(".intro").offset().top}, 1000);
});








$("#aboutButtontwo").click(function(){
    $("html, body").animate({scrollTop: $("#about").offset().top}, 1000);
});
// Smooth scroll to PORT from nav
$("#portButtontwo").click(function(){
    $("html, body").animate({scrollTop: $("#portfolio").offset().top}, 1000);
});

// Smooth scroll to CONTACT from nav
$("#contactButtontwo").click(function(){
    $("html, body").animate({scrollTop: $("#about").offset().top}, 1000);
});

// Smooth scroll to INTRO from nav
$("#introButtontwo").click(function(){
    $("html, body").animate({scrollTop: $(".intro").offset().top}, 1000);
});



