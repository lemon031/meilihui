$(function(){
	//悬浮顶部
    $(window).scroll(function(){ 
        if ($(window).scrollTop()>$('.header_b').offset().top+42){
            $('.header_top').css('display','block');
        }else{
            $('.header_top').css('display','none');
        }
    })
    //返回顶部
    $('.back_b').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
    })
})
