/**
 * Created by ThinkPad User on 2016/11/4.
 */
$(function () {
/*headAni()头部交互效果*/
    function headAni(className, setTime) {
        var cName = className;
        cName = cName.substr(1);
        setInterval(function () {
            $(className).removeClass(cName).css("transition", "all 0.4s linear");
        }, setTime);
    }

    headAni(".ani-maLf", 0);
    headAni(".h2-ani", 500);
    headAni(".hp-ani", 800);
    headAni(".btn-maTop", 1100);
    headAni(".btn-top", 1400);


    $(window).scroll(function () {
        var top = $(window).scrollTop();//获取当前位置离页面顶部的距离
        var mySlide = $(".my-slide").offset().top - $(".my-slide").height() / 2;//获取元素离页面顶部的距离;
        var teamIntroduction = $(".team-introduction").offset().top - $(".team-introduction").height() / 2;
        var coreMa = $(".core-ma").offset().top - $(".core-ma").height() / 2;
        var baiduMap = $(".baidu-map").offset().top - $(".baidu-map").height() / 1.6;
        var foo = $(".baidu-map").offset().top - $(".baidu-map").height() / 2.6;
        if (top >= mySlide) {
            $(".car-ani").removeClass("car-ani").css("transition", "all 0.4s linear");
        }
        if (top >= teamIntroduction) {
            $(".team-ani").removeClass("team-ani").css("transition", "all 1s linear");
            setInterval(function () {
                $(".team-text").removeClass("team-text").css("transition", "all 1s linear");
            },300)
        }
        if (top >= coreMa) {
            headAni(".ani-topw", 300);
            headAni(".ani-toph", 500);
            headAni(".ani-tops", 600);
        }
        if (top >= baiduMap) {
            headAni(".map-maL", 300);
            headAni(".map-maR", 500);
        }
        if (top >= foo) {
            headAni(".asideTe", 600);

        }
    });



    baiduMap();



});


$(window).resize(function () {
    var winW = $(window).width();
    console.log(winW);
});
