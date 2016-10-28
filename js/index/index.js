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
