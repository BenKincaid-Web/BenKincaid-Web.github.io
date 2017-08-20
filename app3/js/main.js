

//home
var link = document.createElement( "link" );
link.href = "css/normalize.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );


//home
var link = document.createElement( "link" );
link.href = "css/home.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );

var docHeight = $(document).height();

console.log(docHeight);
$('#twinkling').css('height', `${docHeight}`);



$('.ham-cont').click(function(){
    $('.nav').animate({"left":"0%"}, );
    $('body').css({"overflow-y":"hidden"});
})

$('.pop-out-close').click(function(){
    $('.nav').animate({"left":"100%"}, ['slow']);
    $('body').css("overflow-y", "visible");
})



$(window).resize(function(){
    if($(window).width() > 823) {
        $('.nav').css("left", "0%");
        $('body').css("overflow-y", "visible");
        console.log('greater than 840');
    } else if($(window).width() < 823){
        $('.nav').css({"left":"100%"});
        console.log('less than 840')
    } else {
        console.log("ELSE");
    }
})

