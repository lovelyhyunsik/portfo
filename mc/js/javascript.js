//반응형 헤더 햄버거
$('.header-inner .bar').click(function(){
   $('.response').stop().animate({left:0},500);
   $('.header-innder').stop().animate({left:'100%'},500)
});
$('.barCloseBt').click(function(){
    $('.response').stop().animate({left:'-100%'},500);
   $('.header-innder').stop().animate({left:0},500)
})

//반응형 헤더 햄버거 안에 2depth
$('.response-menu>ul>li').click(function(){
   $(this).toggleClass('on')
})



//banner슬라이드

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 //페이드인아웃 
 $(function(){
   let move=$('.swiper-wrapper');
   let timer;
   let progressWrap=$('.timer');
   let progressBar=progressWrap.find('.gage');

   line();
   progressBar.animate({width:'100%'},2500);
   function line(){
    setIntervalLine=setInterval(function(){
        progressBar.css('width','0').animate({width: "100%" },2500);
    },5000);
}

   
   slide();

   function slide(){
       timer=setInterval(function(){
           move.animate({left:'-100%'},1000,function(){
               $(this).children('div:first').insertAfter($(this).children('div:last'));
               $(this).css({left:0});
           });
          
       },5000);
   }
   
   let pauseTrue=true;
$('.pause').click(function(){
    if(pauseTrue==true){
       clearInterval(timer);
       $(this).addClass('on');
       pauseTrue=false;
    }else{
      slide();
      $(this).removeClass('on')
      pauseTrue=true;
      line();
    }
})
});
 //페이드인아웃 

//플러스버튼
$('.btnMore').click(function(){
    $(this).parents('#content').css({height:'2200px'})
    $('.seven').css({display:'block'})
    $('.eight').css({display:'block'})
    $('.nine').css({display:'block'})
    $('.ten').css({display:'block'})
    $('.eleven').css({display:'block'})
    $('.twelve').css({display:'block'})

    $(this).click(function(){
        $(this).parents('#content').css({height:'2500px'})
        $(this).css({display:'none'})
        $('.thirteen').css({display:'block'})
        $('.fourteen').css({display:'block'})
        $('.fifteen').css({display:'block'})
    })
})

//aside고정
$(window).scroll(function(){
   
    var sct=$(window).scrollTop();
    console.log(sct)
    if(sct>=1080){
        $('.aside').css({position:" absolute", bottom: '110px'})
        $('.btnTop').css({position:" absolute", bottom: '45px'})
    }else{
        $('.aside').css({position:" fixed", bottom: '110px'})
        $('.btnTop').css({position:" fixed", bottom: '45px'})
    }
})