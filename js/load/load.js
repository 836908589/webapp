/**
 * Created by ThinkPad User on 2016/10/28.
 */
var myurl=["../page/kursenko/home.html","../page/wish/wish.html"];
function myDelay(url) {
    /*动画执行3s后消失*/
    setTimeout(function () {
        $(".load_animate").css({"opacity": "0", "transition": "all 1s linear"})
    }, 3000);
    /*延迟4s自动跳转*/
    setTimeout(function () {
        window.location = url;
    }, 4000);
    return;
}

var url = location.search;
var pageName = url.substr(6);
// console.log(typeof url.substr(6))

if (pageName == "kursenko") {
    myDelay(myurl[0]);
}else if(pageName == "wish"){
    myDelay(myurl[1]);
}


//


