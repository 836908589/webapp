/**
 * Created by ThinkPad User on 2016/10/27.
 */
reH();
$(window).resize(function () {
    reH();
})
function reH() {
    var winW = $(window).width();
    console.log(winW);

}


/*检测IE6,7,8*/
$(function () {
    var browser = navigator.appName
    var b_version = navigator.appVersion
    var version = b_version.split(";");
    var trim_Version = version[1].replace(/[ ]/g, "");
    var notice="<p style='font-size: 26px'>你的IE浏览器版本过低，为了您更好的体验请现代浏览器（谷歌浏览器 (Chrome)，火狐 (Firefox)4.0+，Internet Explorer 9.0+)打开。</p>";
    if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
        document.write(notice);
    }
    else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
        document.write(notice);
    }
    else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
        document.write(notice);
    }else if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
       /* alert("9")*/
    }
});

