var age;

$(".submitData").click(function()
  {
   age = $(".input").val();

   if(age < 18)
   {
     alert("U are only " +age+" years old u need to be 18 to enter this site");
   }
    
   if(age >= 18)
   {
     
     $("a").css("display", "block");
     $("img").css("display", "block");
     alert("Welcome!");
   }
  });