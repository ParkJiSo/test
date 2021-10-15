// let timer=setInterval("show()",3000);


// function show() { // main 그림 슬라이드 모션
//     $(".wrap_img").animate({"left":"-=100%"},1000,function() {
//         $(".wrap_img > li:first").appendTo(".wrap_img");
//         $(".wrap_img").css("left","+=100%");
//     });    
// }
show_main();

$(function() {
    var isOn=0;
    $("html,body").animate({"scrollTop":"0"},10);// 스크롤 고정
    $(".gnb_btn").click(function(e) { // bar 클릭했을 떼 메뉴 나타내기
        e.preventDefault();
       $(".gnb").toggle(500);

       if(isOn==0){
           $(".gnb_btn").addClass("change");
           isOn=1;
       } else {
           $(".gnb_btn").removeClass("change");
           isOn=0;
       }
   });
   $(".gnb>li>a").click(function() {
    $(this).parent().find(".sub").stop().slideToggle(300);
}); 

   $(".close").click(function(e) { // bar 클릭 또는 메뉴 클릭했을 시 메뉴 hide
       e.preventDefault();
       $(".gnb").hide(500);
   })   
});    

function show_main() {
    let current = 0;
    let banner = $(".wrap6>li");

    setInterval(function() {
        let prev = $(".wrap6>li").eq(current);
        move(prev,0,'-100%');

        current++;
        if(current==$(".wrap6>li").length){
            current=0;
        }
        let next = $(".wrap6>li").eq(current);
        move(next,'100%',0);

        $(".wrap_btn li").css({"background":"rgba(0,0,0,0.3)","width":"10%"});
        $(".wrap_btn li:eq("+current+")").css({"background":"rgba(255, 255, 255, 0.7)","width":"20%"});
    },3000);
    function move(tg,start,end) {
        tg.css('left',start)
        .stop()
        .animate({left:end},800);
    }
}
