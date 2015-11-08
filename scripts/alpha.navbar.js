$(document).ready(function(){
  var oldtop = $("#Nav_Bar_Follows").offset().top;
  $(window).scroll(function(){
    var transitioning = 0;
    //NAV BAR STATIC/FOLLOW SCROLL
    if($(window).scrollTop()>=oldtop){
        $("#Nav_Bar_Follows").removeClass("static");
        $("#Nav_Bar_Follows").addClass("follow")
      }
    else{
      $("#Nav_Bar_Follows").removeClass("follow")
      $("#Nav_Bar_Follows").addClass("static")
    }
    var page_links_array = ["Page_2_link","Page_3_link","Page_4_link","Page_5_link"];
    //ACTIVE/INACTIVE NAV BARS
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
  //NAV BAR SCROLLING
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });
  //HOVER TEXT FOR TECHNOLOGIES
  $(".tech_logo").hover(function(){
    var top = $(this).offset().top + $(this).height()+20;
    $("html").append("<div class='tech_box' style='display:none;top:"+top+"'><p>"+$(this).attr("data")+"</p></div>");
    var left=($(this).width()-$(".tech_box").outerWidth())/2+$(this).position().left
    $(".tech_box").css("left",left).fadeIn(100);

  },function(){
    $(".tech_box").remove();
  })

  //PROJECT ON HOVER CSS CREATION

  var NUMBER_OF_PROJECTS = 1;
  for(var a = 0;a<NUMBER_OF_PROJECTS;a++){
    $("#hover_styling").append('#cover_'+a+':hover #tri_'+a+'_1{top:-200%;}#cover_'+a+':hover #tri_'+a+'_2{bottom:-200%;}    #cover_'+a+':hover #project_title_'+a+'{top:-200%;}    #cover_'+a+':hover #project_desc_'+a+'{bottom:-200%;}    #cover_'+a+':hover #project_background_'+a+'{-webkit-filter: grayscale(0%);filter: grayscale(0%);}')
  }

})
