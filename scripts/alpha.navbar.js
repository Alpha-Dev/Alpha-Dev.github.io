$(document).ready(function(){
  var oldtop = $("#Nav_Bar_Follows").position().top;
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
})
