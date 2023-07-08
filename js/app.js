
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
           

});
$(document).ready( function () {
    $(".for3").click(function () {
        $(".for2").hide();
        $(".for3").hide();
        
        });
    // setTimeout(function () {
    //     $(".loader").fadeOut();

    // }, 5000);


});
$("document").ready(function () {
setTimeout(function(){
    $("#loader").fadeOut()
}, 1000);
});
