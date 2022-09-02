
$(document).ready()
{
var size;
var owl = $('.owl-carousel');


if(window.matchMedia("(max-width: 1000px)").matches){
  //small pp phone
   
    size = 1;
   $("img").css("width", "100%").css("height", "100%");
} 

else
{
 //windows big pcx
   size = 5;
}


owl.owlCarousel({
    slideSpeed: 500,
    paginationSpeed: 400,
    loop: true,
    items : size, 
    autoPlay: true,
    autoPlaySpeed: 300,
    autoPlayTimeout: 100,
    autoPlayHoverPause: true
    
    
});

}