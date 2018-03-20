$(function(){
  $("div").click(function(){
    $(this).find("p").toggle();
    $(this).toggleClass("card");
  });
});
