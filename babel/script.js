//Handle Resizes
window.onresize = function () {
	$(".large_text").css("font-size", $("html").height() / 85 / 2 + $("html").width() / 135 / 2 + "em");
};
//Smooth Scrolling Anchors
$(document).ready(function () {
	$(".large_text").css("font-size", $("html").height() / 85 / 2 + $("html").width() / 135 / 2 + "em");
	$('a').click(function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});

//Mobile Nav Bar
let NavigationBar = new NavBar(".button_container_mobile")
$(".button_mobile").click(function(){
  if(NavigationBar.getNavBarState() == 1){
    NavigationBar.CloseNavBar();
  }
})
$(".button_mobile_dropdown").click(function(){
  if(NavigationBar.getNavBarState() == 0){
    NavigationBar.OpenNavBar();
  }
  else if(NavigationBar.getNavBarState() == 1){
    NavigationBar.CloseNavBar();
  }
})

	//Shadow Generation
	let Shadow_Gen = new TextShadowGenerator;
	$(".alpha").css("text-shadow",Shadow_Gen.generate_shadowd(1200,1,"#4B0082"))
	$(".dev").css("text-shadow",Shadow_Gen.generate_shadowd(1200,1,"	#3b0066"))
});
