$(function(){
  $("div.col-md-5").click(function(){
    $("div").removeClass("card");
    $("p").hide();
    $(this).find("p").slideDown();
    $(this).toggleClass("card");
    $(this).click(function(){
      $(this).find("p").toggle();
      $(this).toggleClass("card");
    });
  });
});
