$('.burger').click(function(){
    $('#burger-menu').stop().animate({left:0},300)
})
$('.burger-header-r').click(function(){
    $('#burger-menu').stop().animate({left:'-100%'},300)
})

// 동의 모두선택 / 해제
const agreeChkAll = document.querySelector('input[name=allagree]');
    agreeChkAll.addEventListener('change', (e) => {
    let agreeChk = document.querySelectorAll('input[name=agree]');
    for(let i = 0; i < agreeChk.length; i++){
      agreeChk[i].checked = e.target.checked;
    }
});