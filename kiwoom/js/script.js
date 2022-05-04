$('.tabSet').each(function(){
    
    let tabDiv=$(this);
    let anchors=tabDiv.find('ul li a');
    let panelDiv=tabDiv.find('.panels .panel')
    let lastAnchor;
    let lastPanel;
    

    lastAnchor=anchors.filter('.on')
    lastPanel=$(lastAnchor.attr('href'));
    
    panelDiv.hide();
    lastPanel.show();
    
    
    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('href'));

        lastAnchor.parent('li').removeClass('on');
        currentAnchor.parent('li').addClass('on');

        lastPanel.hide();
        currentPanel.show();

        lastAnchor=currentAnchor;
        lastPanel=currentPanel
    })
}) 

$(function(){
    let move=$('.slide ul');
    let liWidth=$('.slide  ul li').width();
    let arrowRight=$('.nextBtn');
    let arrowLeft=$('.prevBtn');
    let timer;

    
    slide();
    function slide(){
        timer=setInterval(function(){
            move.animate({left:-liWidth},1000,function(){
                $(this).children('li:first').insertAfter($(this).children('li:last'));
                $(this).css({left:0});
            });
        },3000);
    }

    $('.slide-wrap').hover(function(){
        clearInterval(timer)
    },function(){
        slide();
    });

    arrowRight.click(function(){
        move.animate({left:-liWidth},1000,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css({left:0});
        });
    });

    arrowLeft.click(function(){
        move.find('li:last').insertBefore(move.find('li:first'));
        move.css({left:-liWidth}).stop().animate({left:0},1000)
    })
}); //ul 을 움직인것

//slide두번째
let moving=$('.Slide');
let timer;
let wid=moving.find('div').width();
slide()
function slide(){
    timer=setInterval(function(){
        moving.animate({left:wid*-1},500, function(){
            $(this).children('div:first').insertAfter($(this).children('div:last'))
            $(this).css({left:0})
        })
    },2000)
};

$('.Slide-wrap').hover(function(){
    clearInterval(timer);
},function(){
    slide()
});

//content3
$(function(){
    let banner=$('.slide3>ul>li');
    let current=0;
    let timer;


    slide();
    function slide(){timer=setInterval(function(){
        let prev=banner.eq(current);
        move(prev,1,0);
        current++;
        if(current==banner.size()) current=0;
        let next=banner.eq(current);
        move(next,0,1)
    },4000);
}
    function move(tg,start,end){
        tg.css('opacity',start).stop().animate({opacity:end},1000)
    }; //페이트인,아웃 */

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
        }
    });//정지버튼

    $('.next').click(function(){
        let prev=banner.eq(current);
        move(prev,1,0);
        current++;
        if(current==banner.size()) current=0;
        let next=banner.eq(current);
        move(next,0,1)
    })//다음버튼

    $('.prev').click(function(){
        let prev=banner.eq(current);
        move(prev,1,0);
        current--;
        if(current==banner.size()*-1) current=0;
        let next=banner.eq(current);
        move(next,0,1);
    })//이전버튼

});


let change1=$('.text2');
let change2=$('.text3');
let change3=$('.text4');




change1.hover(function(){
    change1.find('.on').animate({left:-126},2000).delay(1000)
    change1.find('.on').animate({left:-252},2000).delay(1000)
    change1.find('.on').animate({left:-409},2000).delay(1000)
    change1.find('.on').animate({left:-525},2000).delay(1000)
    change1.find('.on').animate({left:-651},2000).delay(1000)
    
    change2.css({height:70})
    change2.css({top:350})
    change2.find('ul').css({display:'none'})
    change3.css({height:70})
    change3.css({top:430})
    change3.find('ul').css({display:'none'})
    $(this).css({height:130})
    $(this).find('.on').css({display:'block'})
},function(){
    $(this).find('.on').css({display:'block'})
})

change2.hover(function(){
    change1.find('ul').css({display:'none'})
    change1.css({height:70})
    change3.css({height:70})
    change3.css({top:420})
    change3.find('ul').css({display:'none'})
    $(this).css({height:130})
    $(this).css({top:290})
    $(this).find('.on').css({display:'block'})
},function(){
    $(this).find('.on').css({display:'block'})
})
change3.hover(function(){
    change1.find('ul').css({display:'none'})
    change1.css({height:70})
    change2.find('ul').css({display:'none'})
    change2.css({height:70})
    change2.css({top:290})
    $(this).css({height:130})
    $(this).css({top:360})
    $(this).find('.on').css({display:'block'})
},function(){
    $(this).find('.on').css({display:'block'})
})