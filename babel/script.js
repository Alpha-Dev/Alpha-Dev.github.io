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
	$('a').click(function(){
		let offset = parseInt($($.attr(this, 'href')).css("transform").split(",")[5]) * -1 -20 - parseInt($($.attr(this, 'href')).css("margin-top"));
		if(isNaN(offset))
			offset = 0;
		$('html, body').animate({
			scrollTop: ($($.attr(this, 'href')).offset().top+offset)
		}, 1000);
		return false;
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
	console.log(":)");
  if(NavigationBar.getNavBarState() === 0){
    NavigationBar.OpenNavBar();
  }
  else if(NavigationBar.getNavBarState() === 1){
    NavigationBar.CloseNavBar();
  }
});

	//Shadow Generation
	let Shadow_Gen = new TextShadowGenerator();
	$(".alpha").css("text-shadow",Shadow_Gen.generate_shadowd(1200,1,"#4B0082"));
	$(".dev").css("text-shadow",Shadow_Gen.generate_shadowd(1200,1,"	#3b0066"));

	let ScrollAppear = new AppearOnScroll(-1 * $(window).height()/2 - 120);
	ScrollAppear.getAppearOnScrollElements();
	$(document).scroll(()=>{
			ScrollAppear.AppearanceCheck();
	});

//Text Typing thing
let TextTyperObj = new TextTyper(".TextTyper");
$(".button-design").mouseenter(function(){
	if(document.querySelector(".ad-typer-span").innerHTML != "design")
		TextTyperObj.clearWord(()=>TextTyperObj.writeWord("design"));
});
$(".button-develop").mouseenter(function(){
	if(document.querySelector(".ad-typer-span").innerHTML != "develop")
		TextTyperObj.clearWord(()=>TextTyperObj.writeWord("develop"));
});
