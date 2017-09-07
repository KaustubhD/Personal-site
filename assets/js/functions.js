$(window).on('load',function(){
  $('.container').addClass('go-away');
});
$(document).ready(function(){
  var sc = $(document);
  var scroll_pos = 0;
  var head_hov = $('.need-another-wrap');
  var second_top = $('.about');
  $(window).on('scroll', function(){
    scroll_pos = sc.scrollTop();
    // head_hov.css('transform', 'translateY(' + (- scroll_pos / 2.5) + 'px)');
    // $('.head>.sec-wrap').css('background-position', 'top ' + scroll_pos/15 + '% left 70%');

    console.log($(window).height());
    if(scroll_pos > (2 * $(window).height())/3){
      $('.about>.sec-wrap').addClass('animate-in');
    }
    if(scroll_pos > $(window).height()){
      $('.for-svg').addClass('animate-circles');
    }
  });
  head_hov.on('mouseover', function(q){
    $(this).addClass('animate');
  });
  head_hov.on("Animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd", function(w){
    $(this).removeClass('animate');
  });
  
  // var x = setTimeout(function(){
    
  // }, 3000);

    $('#back-top').on('click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 400);
    });





});
