$('.hidden').hover(function(){
    const mh=$(this).innerHeight();
    const img=$(this).find('img');
    const imgh=img.innerHeight();

    img.stop().animate({top:mh-imgh},3000)
},function(){
    const img=$(this).find('img');
    img.stop().animate({top:0},3000)
})

window.onload = function () {
    var elm = "section";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });

            //섹션2 스킬바이동
            $(window).scroll(function(){
                let profileTop = $(window).scrollTop();
                let sct = $('#profile').offset().top;
                //console.log(sct)
                if(profileTop == sct){
                    $('.bar1 span').stop().animate({left:'90%'},800)
                    $('.bar2 span').stop().animate({left:'90%'},800)
                    $('.bar3 span').stop().animate({left:'75%'},800)
                    $('.bar4 span').stop().animate({left:'85%'},800)
                    $('.bar5 span').stop().animate({left:'85%'},800)
                }else{
                    $('.bar1 span').stop().animate({left:0},100)
                    $('.bar2 span').stop().animate({left:0},100)
                    $('.bar3 span').stop().animate({left:0},100)
                    $('.bar4 span').stop().animate({left:0},100)
                    $('.bar5 span').stop().animate({left:0},100)                }

            })
           
        });
    });
}

//nav a클릭하면 페이지이동
var menu = $('.gnb a');
var contents = $('section');

menu.click(function(event){
  event.preventDefault();
  var tg = $(this);
  var i = tg.index();
  var section = contents.eq(i);
  var tt = section.offset().top;
    $('html, body').stop().animate({scrollTop:tt},500);
});

$('.gnb a').click(function(e){
    var el=$(e.target).closest('a')
    el.siblings('a').removeClass('on');
    el.addClass('on')
})


//페이지이동하면 nav a활성화
$(window).scroll(function(){
    let scTop = $(window).scrollTop();
    contents.each(function(){
        let tgs=$(this);
        let idx=tgs.index();
        if(tgs.offset().top <=scTop){
            menu.removeClass('on');
            menu.eq(idx).addClass('on');
        }
    });

});

/* 버거메뉴 클릭 */
$('#header .burger').click(function(){
    $(this).toggleClass('on');
    $('.content').slideToggle()
})
$('.content a').click(function(){
    $('.content').slideUp();
    $('#header .burger').removeClass('on')
})


$(window).scroll(function(){
    let pj1Top = $(window).scrollTop();
    let pj1ct = $('#pj01').offset().top;
    if(pj1Top == pj1ct){
        $('#pj01 .cover .bx-left').addClass('on')
        $('#pj01 .cover .bx-right').addClass('on')
        $('#pj01 .cover .bx-left .info_bx').addClass('on')
    }else{
        $('#pj01 .cover .bx-left').removeClass('on')
        $('#pj01 .cover .bx-right').removeClass('on')
        $('#pj01 .cover .bx-left .info_bx').removeClass('on')
    }
})
$(window).scroll(function(){
    let pj2Top = $(window).scrollTop();
    let pj2ct = $('#pj02').offset().top;
    if(pj2Top == pj2ct){
        $('#pj02 .cover .bx-left').addClass('on')
        $('#pj02 .cover .bx-right').addClass('on')
        $('#pj02 .cover .bx-right .info_bx').addClass('on')
    }else{
        $('#pj02 .cover .bx-left').removeClass('on')
        $('#pj02 .cover .bx-right').removeClass('on')
        $('#pj02 .cover .bx-right .info_bx').removeClass('on')
    }
})
$(window).scroll(function(){
    let pj3Top = $(window).scrollTop();
    let pj3ct = $('#pj03').offset().top;
    if(pj3Top == pj3ct){
        $('#pj03 .cover .bx-left').addClass('on')
        $('#pj03 .cover .bx-right').addClass('on')
        $('#pj03 .cover .bx-left .info_bx').addClass('on')
    }else{
        $('#pj03 .cover .bx-left').removeClass('on')
        $('#pj03 .cover .bx-right').removeClass('on')
        $('#pj03 .cover .bx-left .info_bx').removeClass('on')
    }
})






