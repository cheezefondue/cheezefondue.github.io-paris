// 페이지 배경색 변경
$(function () {
    var myFullpage = new fullpage("#fullpage",{
        sectionsColor: ['#FFC19E', '#FFD8D8', '#FAE0D4', '#F6F6F6', '#353535'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        lazyLoad:true,
        navigation:true,
        navigationTooltips: [' ', ' ', ' ',' '],
        showActiveTooltip: true,
    })

// 동영상 재생
const items = document.querySelectorAll(".vid");
for(let i =0; i<items.length; i++){
items[i].addEventListener('mouseenter', e=>{
    e.currentTarget.querySelector('video').play();
});
items[i].addEventListener('mousemove', e=>{
    e.currentTarget.querySelector('video').play();
});
}
this.addEventListener('mouseleave',e=>{
    e.currentTarget.querySelector('video').pause();
})

// ham 메뉴 모바일
    //ham버튼을 클릭하면 .mnav가 나오도록
    //다시 클릭하면 mnav가 들어가도록
    $(".mham").click(function(e){
        e.preventDefault();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $("#menu").stop().animate({"left":"-100%"},100);
        }
        else{
            $(this).addClass("active");
            $("#menu").stop().animate({"left":0},300)
            $("#menu img").stop().animate({"left":100},300)
        }
})

});