/**
 * Created by ThinkPad User on 2016/9/24.
 */
/*kursenko*/
reH();
$(window).resize(function () {
    reH();
})
function reH() {
    var winH = $(window).height();
    var winW = $(window).width();
    // alert(winH);
    $("header").css("height", winH);
    $(".banner_mp4").css({"height": winH, "width": winW});
    console.log(winW);
    if (winW <= 768) {
        $(".se_p").html("Alex is an awesome designer with a fine sense of style." +
            " Over the 8 years of working with our company, he has completed" +
            "a vast number of projects for us, and each of them exceeded my expectations." +
            "I recommend Alex as a highly perceptive designer who always knows" +
            "precisely what the customer wants.");
    }
}
$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();//获取当前位置离页面顶部的距离
        var sec_Top = $(".second_scroll").offset().top- $(".third_scroll").height() / 2//获取元素离页面顶部的距离;
        var thi_Top = $(".third_scroll").offset().top - $(".third_scroll").height() / 2;
        var for_Top = $(".fourth_scroll").offset().top - $(".fourth_scroll").height() / 2;
        var fif_Top = $(".fifth_scroll").offset().top - $(".fifth_scroll").height() / 2;
        var six_Top = $(".sixth_scroll").offset().top - $(".sixth_scroll").height() / 2;
        var seventh_part = $(".seventh_part").offset().top - $(".seventh_part").height() / 2;
        var foo = $(".my_footer").offset().top-$(".my_footer").height()*1.6;
         alert(top)
        alert(foo)

        function myAni(partTop,tit,discr,skip,img) {
            var classTit = tit;
            classTit = classTit.substr(1);

            var classDiscr = discr;
            classDiscr = classDiscr.substr(1);

            var classSkip = skip;
            classSkip = classSkip.substr(1);

            if (top >= partTop) {
                $(tit).removeClass(classTit).css("transition", "all 0.6s linear");
             setInterval(function () {
                    $(discr).removeClass(classDiscr).css("transition", "all 0.3s linear");
                }, 1000);
              setInterval(function () {
                    $(skip).removeClass(classSkip).css("transition", "all 0.3s linear");
                }, 1400);
            }
            setInterval(function () {
                $(img).css({"opacity":"1","transition":"all 0.3s linear"});
            }, 500);
        }
        /*第二块*/
        myAni(sec_Top,".scl_tit",".scl_titl_discri",".scl_skip");
        /*第三块*/
        myAni(thi_Top,".thi_ani_tit",".thi_ani_discri",".thi_ani_skip");
        /*第四块*/
        myAni(for_Top,".four_tit",".four_titl_discri",".four_skip");
        /*第五块*/
        myAni(fif_Top,".fifth_tit",".fifth_ani_discri",".fifth_ani_skip");
        /*第六块*/
        myAni(six_Top,".sixth_ani_tit",".sixth_ani_discri",".sixth_ani_skip");
        function textAni() {
            if (top >= seventh_part) {
                $(".se_h1").css({"opacity":"1","transition":"all 0.4s linear"});
                setInterval(function () {
                    $(".se_span").css({"opacity":"1","transition":"all 0.4s linear"});
                },300);
                setInterval(function () {
                    $(".se_p").css({"opacity":"1","transition":"all 0.4s linear"});
                },600);
                setInterval(function () {
                    $(".cr_img").css({"opacity":"1","transition":"all 0.4s linear","margin":"5% auto auto"});
                },900);
                setInterval(function () {
                    $(".se_h2").css({"opacity":"1","transition":"all 0.4s linear","padding-top":"2%"});
                },1200);
                setInterval(function () {
                    $(".se_name").css({"opacity":"1","transition":"all 0.4s linear","padding-top":"0%"});
                },1500);
            }
        }
        textAni();
        /*footer*/
        if (top >=foo) {
            $(".foo_auto>h2").css({"opacity":"1","transition":"all 0.4s linear"});
            $(".just_btn > input").css({"opacity":"1","transition":"all 0.4s linear","transition-delay":"0.8s"});
            $(".foo_auto > span").css({"opacity":"1","transition":"all 0.4s linear","transition-delay":"1.6s"});

        }
    });
    

});
