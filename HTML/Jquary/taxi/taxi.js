//km takster

const gebyr1 = 33; //dagtakst startgebyr
const kmpris1 = 16; //dagtakst km pris

const gebyr2 = 47; //dagtakst startgebyr
const kmpris2 = 18; //dagtakst km pris

const gebyr3 = 52; //dagtakst startgebyr
const kmpris3 = 22; //dagtakst km pris


//tjekker om siden er loaded og klar til at js kan køre
//hvis siden er klar og der bliver klikket på en knap, så skal funktionen "calc" udføres

$(document).ready(function() {
  $('html').css('overflow-x', 'initial');
    $("button").click(function()
     {
      $("#pris").css({ 
        opacity: '0',
        fontSize: "15px"
     });
      calc();
    });
});


//vores taxi class står for alt udregningen bag priserne
//først opsætter vi en constructor med de værdier vi skal bruge til at beregne prisen
class taxi {
    constructor(km, time) {
      this.km = km;
      this.time = time;
    }
    //Når der bliver kaldt "new taxi()" i "calc()" så kaldes der på calcPrize()
    get prize() {
      return this.calcPrize();
    }

    //Her udregnes prisen på turen
    calcPrize() {

        //Tjekker om tiden er mellem takst tiderne, og udregner prisen der efter

            if(this.time < "17:59" && this.time > "06:00")
            {
                return gebyr1 + kmpris1 * this.km;   
                
            }
            else if(this.time < "23:59" && this.time > "18:00")
            {
                return gebyr2 + kmpris2 * this.km;  
            }
            else
            {
                return gebyr3 + kmpris3 * this.km;  
            }
       
    }
  }

  //Functionen indhenter de nødvendige værdier fra DOM og kalder på prize() for at output prisen
  function calc()
{
    //indhenter km og time
    let km = $("#km").val();
    let time = $("#kl").val();
    
    //gør brug af class taxi til at lave en ny tur
    const drive = new taxi(km, time);

    //outputer prisen af turen.
    $("#pris").text(+drive.prize+"kr"); 
    $("#pris").animate({ 
     opacity: '1',
     fontSize: "100px"
  });
}

