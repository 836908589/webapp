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
        var sec_Top = $(".second_scroll").offset().top;//获取元素离页面顶部的距离;
        var for_Top = $(".fourth_scroll").offset().top-$(".fourth_scroll").height()/2;
        /*第二块*/
        if (top >= sec_Top) {
            $(".scl_tit").css({"opacity": "1", "margin-left": "0%", "transition": "all 0.6s linear"});
            setInterval(function () {
                $(".scl_titl_discri").css({"opacity": "1", "margin-left": "0%", "transition": "all 0.6s linear"});
            }, 1000);
            setInterval(function () {
                $(".scl_skip").css({"opacity": "1", "margin-left": "0%", "transition": "all 0.6s linear"});
            }, 2000)

        }
        /*第四块*/
        if (top >for_Top) {
            $(".four_tit").css({"opacity": "1", "margin-left": "0%", "transition": "all 0.6s linear"});
            setInterval(function () {
                $(".four_titl_discri").css({"opacity": "1", "margin-left": "0%", "transition": "all 0.6s linear"});
            }, 1000);
            setInterval(function () {
                $(".four_skip").css({"opacity": "1", "margin-left": "0%", "transition": "all 0.6s linear"});
            }, 2000)

        }
    });
});
