/**
 * Created by ThinkPad User on 2016/10/27.
 */
var url;
function resizeH(){
   var winH=$(window).height();
   $(".bg").css({"height":winH,"min-height":"740px"});
}
resizeH();
$(window).resize(function () {
   resizeH();
})
$(function () {
   var browser=navigator.appName
   var b_version=navigator.appVersion
   var version=b_version.split(";");
   var trim_Version=version[1].replace(/[ ]/g,"");
   if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0")
   {
      document.write("你的IE浏览器版本过低，为了您更好的体验请现代浏览器（谷歌浏览器 (Chrome)，火狐 (Firefox)4.0+，Internet Explorer 9.0+)打开。");
   }
   else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
   {
      document.write("你的IE浏览器版本过低，为了您更好的体验请现代浏览器（谷歌浏览器 (Chrome)，火狐 (Firefox)4.0+，Internet Explorer 9.0+)打开。");
   }
   else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0")
   {
      alert("aaaa")
      document.write("你的IE浏览器版本过低，为了您更好的体验请现代浏览器（谷歌浏览器 (Chrome)，火狐 (Firefox)4.0+，Internet Explorer 9.0+)打开。");
   }

})