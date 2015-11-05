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
})
