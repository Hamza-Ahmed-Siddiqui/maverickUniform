$(document).ready(function () {
    $("#hom").hover(function () {
        $("#home").toggle();
        $(".home-icon").toggle();
        });
$("#abt").hover(function () {
$("#about").toggle()
$(".about-icon").toggle();
});

    $("#cont").hover(function () {
        $("#contact").toggle();
        $(".contact-icon").toggle();
        });
        $("#cloth").hover(function () {
            $("#clothing").toggle();
            $(".clothing-icon").toggle();
            });
            $("#gal").hover(function () {
                $("#gallery").toggle();
                $(".gallery-icon").toggle();
                });

            
                $("#search3").hover(function () {
                    $("#for2").show();
                    $("#search3").hide();

                });
                $("#for2").click(function () {
                    $("#for2").toggle();
                    $("#search3").show();

                });
   $("#heartbttn1").click(function () {
$("#heartbtn1").css("color", "red").toggle();

   });  
   $("#heartbttn2").click(function () {
    $("#heartbtn2").css("color", "red").toggle();
    
       });  
       $("#heartbttn3").click(function () {
        $("#heartbtn3").css("color", "red").toggle();
        
           });  
           $("#heartbttn4").click(function () {
            $("#heartbtn4").css("color", "red").toggle();
            
               });             
//    $("#heartbttn").click(function () {
//     $(".heart").css("color", "gray")
//        });             
                   
                   



});