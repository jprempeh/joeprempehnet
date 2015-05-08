$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});
// scroll function
function scrollToID(id, speed){
	var offSet = 72;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}

// Code

// JavaScript Document






$(window).bind("load", function() {
	
	$(".portfolio_loading_icon").fadeOut(500);

	var slideLeft = function($item) {
    $item.show().addClass('animated fadeInUpBig');
}

    
    $(".portfolio_item").each(function(index, item) {
        setTimeout(slideLeft, 500 * (index + 1), $(item));
    });
    


$("a.me_logo").hover(function(){


$(this).addClass('animated pulse');





},function(){


$(this).removeClass('animated pulse');



});







$("a.mobile_nav_icon").toggle(function(){

$(this).toggleClass('active_icon');
$("html, body").scrollTop(0);
$('.header_outer').animate({paddingTop: "210px"},200);
$(".navigation_outer").fadeIn(400);


},function(){

$(this).toggleClass('active_icon');

$(".navigation_outer").delay(200).fadeOut(400);

$('.header_outer').animate({paddingTop: "0px"},500);


});


  

$('.navigation_outer').waypoint(function(direction) {

$(".navigation_outer").toggleClass('fixed');

$(".header_outer").toggleClass('spacing');

});




$(".inner_wrapper .portfolio_item, .inner_wrapper .portfolio_item.creative_market_block").hover(function(){

$(".inner_wrapper .portfolio_item, .inner_wrapper .portfolio_item.creative_market_block").addClass('active_portfolio_item');
$(this).removeClass('active_portfolio_item');
$(this).addClass('active_portfolio_item_none');




},function(){
	


$(".inner_wrapper .portfolio_item, .inner_wrapper .portfolio_item.creative_market_block").removeClass('active_portfolio_item');

});
});




$(window).resize(function() {
if ($(window).width() < 960) {


$(".navigation_outer").removeClass('fixed').show();
$(".header_outer").removeClass('spacing').css( "padding-top", "0" );

}
else {
}
});

