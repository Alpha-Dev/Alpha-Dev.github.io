import {NavBar} from "./NavBar.js";
import {TextShadowGenerator} from "./TextGenerator.js";
import {AppearOnScroll} from "./AppearOnScroll.js";
import {TextTyper} from "./TextTyper.js";
//Handle Resizes
window.onresize = () =>  {
	$(".large-text").css("font-size", $("html").height() / 85 / 2 + $("html").width() / 135 / 2 + "em");
};
//Smooth Scroll	ing Anchors
$(document).ready(() =>  {
	$(".large-text").css("font-size", $("html").height() / 85 / 2 + $("html").width() / 135 / 2 + "em");
	let transitioning = false;
	$('.site-nav-link').click(function(){
		if(!transitioning){
			transitioning = true;
			let offset = parseInt($($.attr(this, 'href')).css("transform").split(",")[5]) * -1 -20 - parseInt($($.attr(this, 'href')).css("margin-top"));
			if(isNaN(offset))
				offset = 0;
			$('html, body').animate({
				scrollTop: ($($.attr(this, 'href')).offset().top+offset)
			}, 1000,()=>transitioning = false);
			return false;
		}
	});
});
//Mobile Nav Bar
let NavigationBar = new NavBar(".button-container-mobile");
$(".button-mobile").click(() => {
  if(NavigationBar.getNavBarState() === 1){
    NavigationBar.CloseNavBar();
  }
});
$(".button-mobile-dropdown").click(() => {
  if(NavigationBar.getNavBarState() === 0){
    NavigationBar.OpenNavBar();
  }
  else if(NavigationBar.getNavBarState() === 1){
    NavigationBar.CloseNavBar();
  }
});

	//Main Text Shadow Generation
	let Shadow_Gen = new TextShadowGenerator();
	$(".alpha").css("text-shadow",Shadow_Gen.generate_shadowd(1200,1,"#4B0082"));
	$(".dev").css("text-shadow",Shadow_Gen.generate_shadowd(1200,1,"	#3b0066"));

	let ScrollAppear = new AppearOnScroll(-1 * $(window).height()/2 - 120);
	ScrollAppear.getAppearOnScrollElements();
	$(document).scroll(()=>{
			ScrollAppear.AppearanceCheck();
	});

//Mouse position for onclick ripple
$(".button-ripple").click(function(e){
   var parentOffset = this.getBoundingClientRect();
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - $(document).scrollTop()-parentOffset.top - parseInt($(this).css("margin-top"));
	 console.log($(this).data().rippleColor);
	 $(this).append($("<div class='button-ripple-element' style='left:"+relX+"px;top:"+relY+"px'></div>").css("background-color",$(this).data().rippleColor).css("z-index",-1).animate({opacity:0},1000,function(){
		 $(this).remove();
	 }));
});
