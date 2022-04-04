//tap메뉴
$(function(){
    $(".btn>li").click(function(e){
        let selectNum = $(this).index();
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
        

        $(".tabList>ul").eq(selectNum).css("display","block")
        .siblings().css("display","none");
    })
})