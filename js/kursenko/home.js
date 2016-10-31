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
    if(winW<=768){
        $(".se_p").html("Alex is an awesome designer with a fine sense of style." +
            " Over the 8 years of working with our company, he has completed"+
        "a vast number of projects for us, and each of them exceeded my expectations."+
        "I recommend Alex as a highly perceptive designer who always knows"+
        "precisely what the customer wants.")
    }
}

