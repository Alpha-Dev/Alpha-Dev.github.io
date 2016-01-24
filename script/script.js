
function generate_shadowd(length,b_dif,color){
	var strng = "";
	var b = 1;
  if(length > 0){
  	for(var a = 1;a<=length;a+=2){
  		strng +=a+"px "+b+"px 0 " + color;
  		if(a+2 <length){
  			strng+=","
  		}
  		b+=b_dif;
  	}
  }
  else{
    b = 5;
    for(var a = 0;a>=length;a-=2){
  		strng +=a+"px "+b+"px 0 " + color;
  		if(a >length){
  			strng+=","
  		}
  		b+=b_dif;
  	}
  }
	return strng;
}

$(document).ready(function(){
	$('a').click(function(){
			$('html, body').animate({
					scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 500);
			return false;
	});
	$(".alpha").css("text-shadow",generate_shadowd(1200,1,"#4B0082"))
	$(".dev").css("text-shadow",generate_shadowd(1200,1,"	#3b0066"))
	$(".project_name").css("text-shadow",generate_shadowd(200,1,"#3b0066"));
	$(".person_text").css("text-shadow",generate_shadowd(200,1,"#0099cc"));
	$(".text_shadow").css("text-shadow",generate_shadowd(200,1,"#0099cc"));

});
