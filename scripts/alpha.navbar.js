$(document).ready(function(){
  var oldtop = $("#Nav_Bar_Follows").offset().top;
  $(window).scroll(function(){
    var transitioning = 0;
    if($(window).scrollTop()>=oldtop){
      $("#Nav_Bar_Follows").removeClass("static");
      $("#Nav_Bar_Follows").addClass("follow")
      }
    else{
      console.log("readd")
      $("#Nav_Bar_Follows").removeClass("follow")
      $("#Nav_Bar_Follows").addClass("static")
    }
  })
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });

  $(".tech_logo").hover(function(){
    
    console.log($(this).attr("data"));
    var top = $(this).offset().top + $(this).height()+20;
    /*";left:"+$(this).offset().left+*/
    $("html").append("<div class='tech_box' style='display:none;top:"+top+"'><p>"+$(this).attr("data")+"</p></div>");
    var left=($(this).width()-$(".tech_box").outerWidth())/2+$(this).position().left
    console.log($(this).outerWidth()-$(".tech_box").outerWidth())
    $(".tech_box").css("left",left).fadeIn(100);

  },function(){
    console.log("remove")
    $(".tech_box").remove();
  })
})
