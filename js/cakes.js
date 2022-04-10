///heart 좋아요
$(function(){
    //click
    let Count =0;

    //heart 마우스 클릭하면 Count 값이 1 증가
        //.heart a버튼을 클릭하면 위에 있는 active클래스를 가지고 있으면 제거하고, 없으면 active클래스를 추가하기
        $(".heart a").click(function(){
            if($(this).hasClass("active")){
                $(this).removeClass("active")
                Count--;
                $(".heart span").next().text(Count);
            }
            else{
                $(this).addClass("active");
                Count++;
                $(".heart span").next().text(Count);
            }
        })

    // 팝업 이미지 띄우기
    //.bg의 너비
    var bgWidth = $(".bg").outerWidth();
    var bgHeight = $(".bg").outerHeight();
    //.popupImg 너비
    var popWidth = $(".popupImg").outerWidth();
    var popHeight = $(".popupImg").outerHeight();
    //왼쪽 위치는
    var $left =(bgWidth-popWidth)/2;
    var $top = (bgHeight-popHeight)/2;

    //img를 클릭하면 이미지가 가지고 있는 src속성을 알아서
    //.popupImg의 배경으로 넣기
    //bg가 fadeIn 되도록    
    $(".innerBox>span>a>img").click(function(){
        var $src = $(this).attr("src");
        $(".bg").fadeIn(500);

        $(".popupImg").css({
            "background-image":"url("+ $src +")",
            "left":$left,
            "top":$top
            
        })
        $(".popupImg").slideDown(500);
    })
    
    //.popupImg를 클릭하면 bg는 fadeOut, .popupImg slideUp
    $(".popupImg,.bg").click(function(){
        $(".bg").fadeOut(500);
        $(this).slideUp(500);
    })
})