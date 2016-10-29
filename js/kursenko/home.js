/**
 * Created by ThinkPad User on 2016/9/24.
 */
reH();
$(window).resize(function () {
    reH();
})
function reH() {
    var winH=$(window).height();
    var winW=$(window).width();
    // alert(winH);
    $("header").css("height",winH);
    $(".banner_mp4").css({"height":winH,"width":winW});
    console.log(winW);
}

