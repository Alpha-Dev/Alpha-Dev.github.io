$(document).ready(function(){
  var oldtop = $("#Nav_Bar_Follows").offset().top;
  $(window).scroll(function(){
    var transitioning = 0;
    if($(window).scrollTop()>=oldtop){
        $("#Nav_Bar_Follows").removeClass("static");
        $("#Nav_Bar_Follows").addClass("follow")
      }
    else{
      $("#Nav_Bar_Follows").removeClass("follow")
      $("#Nav_Bar_Follows").addClass("static")
    }
    var page_links_array = ["Page_2_link","Page_3_link","Page_4_link","Page_5_link"];
    if($(window).scrollTop()<=$("#Page_2").offset().top){
      for(var a = 0;a<page_links_array.length;a++){
        $("#"+page_links_array[a]).removeClass("active")
        $("#"+page_links_array[a]).addClass("inactive");
      }
    }
    if($(window).scrollTop()>=$("#Page_2").offset().top && $(window).scrollTop()<$("#Page_3").offset().top){
        for(var a = 0;a<page_links_array.length;a++){
        $("#"+page_links_array[a]).removeClass("active")
        $("#"+page_links_array[a]).addClass("inactive");
      }
        $("#Page_2_link").removeClass("inactive");
        $("#Page_2_link").addClass("active");
    }
    if($(window).scrollTop()>=$("#Page_3").offset().top && $(window).scrollTop()<$("#Page_4").offset().top){
      for(var a = 0;a<page_links_array.length;a++){
      $("#"+page_links_array[a]).removeClass("active")
      $("#"+page_links_array[a]).addClass("inactive");
    }
      $("#Page_3_link").removeClass("inactive");
      $("#Page_3_link").addClass("active");
    }
    if($(window).scrollTop()>=$("#Page_4").offset().top && $(window).scrollTop()<$("#Page_5").offset().top){
      for(var a = 0;a<page_links_array.length;a++){
      $("#"+page_links_array[a]).removeClass("active")
      $("#"+page_links_array[a]).addClass("inactive");
    }
      $("#Page_4_link").removeClass("inactive");
      $("#Page_4_link").addClass("active");
    }
    if($(window).scrollTop()>=$("#Page_5").offset().top){
      for(var a = 0;a<page_links_array.length;a++){
      $("#"+page_links_array[a]).removeClass("active")
      $("#"+page_links_array[a]).addClass("inactive");
    }
      $("#Page_5_link").removeClass("inactive");
      $("#Page_5_link").addClass("active");
    }
  })
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });

  $(".tech_logo").hover(function(){
    var top = $(this).offset().top + $(this).height()+20;
    /*";left:"+$(this).offset().left+*/
    $("html").append("<div class='tech_box' style='display:none;top:"+top+"'><p>"+$(this).attr("data")+"</p></div>");
    var left=($(this).width()-$(".tech_box").outerWidth())/2+$(this).position().left
    $(".tech_box").css("left",left).fadeIn(100);

  },function(){
    $(".tech_box").remove();
  })
})
