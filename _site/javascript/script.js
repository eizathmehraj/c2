jQuery(document).ready(function($) {
    $(".btn").click(function() {
        window.location.href = 'mailto:neil@cognopia.com?subject=Cognopia%20Lead';
    });
    $("#cta-one").click(function() {
        var heading = $("#cta-one-head").html();
        console.log(heading);
        window.location.href = 'mailto:neil@cognopia.com?subject=' + heading;
    });
    $("#cta-two").click(function() {
        var heading = $("#cta-two-head").html();
        console.log(heading);
        window.location.href = 'mailto:neil@cognopia.com?subject=' + heading;
     });
    $("#cta-three").click(function() {
        var heading = $("#big-data-heading").html();
        console.log(heading);
        window.location.href = 'mailto:neil@cognopia.com?subject=' + heading;
    });
    $("#cta-four").click(function() {
        var heading = $("#cta-four-head").html();
        console.log(heading);
        window.location.href = 'mailto:neil@cognopia.com?subject=' + heading;
     });



    // -----------//

    $(".mobile-menu").click(function() {

       // $("#links").toggle();
       if ($("#links").css('display') === 'none') {

           $("#links").css({
               "display": "block",
               "margin-top": "70px",
               "padding-top": "0px",
               "padding-left": "35px",
               


               "border-radius": "15px "
           });

           $("#unordered-list").css("display", "block");
       } else {
             $("#unordered-list").css("display", "none");
           $("#links").css("display", "none");
           // $("#unordered-list").css("margin-top", "0px");
       }

});



});
