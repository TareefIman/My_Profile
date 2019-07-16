$(document).ready(function() {
    
    
    /*  for the sticky navigaton */
   $('.js--section-features').waypoint(function(direction ){ if(direction == "down"){
       $('nav').addClass('sticky');
   } else{
       $('nav').removeClass('sticky');
    }   
   }, {
  offset: '00px;'
});
    
    
   /*scroll on buttons*/
   $('.js--scroll-to-plans').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
   });
    
    $('.js--scroll-to-start').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
   });
    
/* animations on scroll */
$('.js--wp-1').waypoint(function(direction))
    $('.js--wp-1').addClass('animated fade in');
    
});
    
    



