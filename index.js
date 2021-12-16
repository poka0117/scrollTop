$(document).ready(function(){
    // 画面表示の瞬間は非表示
    $('.top_btn').hide();
    $(window).scroll(function(){
        // スクロール量が10pxを超えたら表示、以下なら非表示
        if($(this).scrollTop() > 10){
            $('.top_btn').fadeIn();
        }else{
            $('.top_btn').fadeOut();
        }
    });
    // クリックすると一番上に0.5秒で戻る
    $('.top_btn').on('click',function(){
        $('body,html').animate({scrollTop: 0},500);
        return false;
    })
})