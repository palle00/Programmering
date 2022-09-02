
$(document).ready(function()
{
//opg 1

//del 1
$("#click").click(function () {
      alert("This is an alert message!");
  });

//del 2
  $("#fade").click(function()
  {
    $("#hello").hide().fadeIn(1000);
  });

  //del 3
  $("#nest").click(function()
  {
    $(".level2").children().css("color", "green");
  });


  //opg2

  //del 1
  $("#log").click(function()
  {
    $(".one").each(function() {
      console.log($( this ).text() );
    });
    
  });

  //del 2
  $("#col").click(function()
  {
    $(".one p:nth-child(3)").css("color", "red");
    
  });

  //opg 3

  //del 1
  $("#gen").click(function()
  {
    for (let i = 0; i < 5; i++) {
      $(".two").append( "<p id='new'>new paragraph "+i+"</p>" );
      
    }

  
  });

  //del 2
  $("#rem").click(function()
  {
  $(".two p:odd").each(function() {
    this.remove();
    
});
  
});
});