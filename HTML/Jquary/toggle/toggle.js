$( document).ready(function() {

    //Dark Mode
$(function(){
   $(".time").on("click", function()
   {
    $("body").toggleClass("body-color");
    $(".time").toggleClass("time-animate");
    $("h1").toggleClass("text");
    $(".ticket").toggleClass("ticket-invert");
    
    var src = ($(".time").attr('src') === 'img/sun.png')
            ? 'img/moon.png'
            : 'img/sun.png';
        $(".time").attr('src', src);
       
        setTimeout(function(){
            var text = ($("h1").text() === 'Light')
            ? 'Dark'
            : 'Light';

        $("h1").text(text);
          }, 150);
   
    });

});

//Ticket rotate
setInterval(function() 
{
    $(".ticket").animate({
        rotate: "5deg"});
         
          $(".ticket").animate({
            rotate: "-10deg"});
}, 6000);

});

