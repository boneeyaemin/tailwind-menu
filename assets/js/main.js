$(document).ready(function(){


    $(".testimonial").owlCarousel({
        items:1,
        loop:true,
        smartSpeed: 900,
        nav:true,
        responsive:true,
        responsive:{
            0:{
                nav:false,
            },
            576:{
               nav:true,
            },
        },
        navText: [
            '&larr;',
            '&rarr;'
        ]
    });





    // jquery practice

    $('.title').click(function(){
        $(".demo").slideToggle();
    });

 // accordion

    $(".a-content").hide()
    $(".accordion li").first().children(".a-content").show();
    $(".accordion li").first().children(".a-title").addClass("active");

   

   $(".a-title").click(function(){
        $(this).parent("li").siblings().children(".a-title").removeClass("active");
        $(this).parent("li").siblings().children(".a-content").slideUp();
        $(this).toggleClass("active").next().slideToggle();
   });

// menu menu 

    // $(".h-menu ul").clone().appendTo(".mobile-menu");
    // $('.menu-trigger').on( 'click', function(){
    //     $('.mobile-menu').slideToggle();
    // });
    $(".h-menu").clone().prependTo(".mobile-menu");
    $(".menutrigger").on('click', function(){
    $(this).toggleClass("active");
    $(".mobile-menu").stop(true,false,true).slideToggle();
    $('body').toggleClass('overflow-hidden');
    });



    

// go top button 
    $('body').prepend('<div class="go-top"><i class="fa-solid fa-angle-up"></i></div>')
    $(window).scroll(function(){
       if($(window).scrollTop() > 200){
           $(".go-top").fadeIn();
       }else{
           $(".go-top").fadeOut();
       }
    });
    $(".go-top").on('click', function(){
       $("body, html").animate({scrollTop:0}, 999);
    });




});