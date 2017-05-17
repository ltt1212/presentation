/**
 * Created by liutingting_sx on 2017/5/16.
 */
var $win = $(window);

var $sectionContainer = $('#section-container');
var $slider = $('.slider');
var $sections = $('.section');

var winHeight = $win.height();
var index = 0;
var sectionNum = $sections.length;
var tId;

initSection();

$win.keydown(function (e) {
    if (e.which == 38 && index > 0){
        $('.second-title').remove();
        slideAnimation('up', slideEnd);
    }else if(e.which == 40 && index < 3 ){
        $('.second-title').remove();
        slideAnimation('down',slideEnd);
    }
});
$win.on('resize', function () {
    throttle(function () {
        winHeight = $win.height();
        initSection();
    }, 500);        $slider.animate({top: - index * winHeight} , 300);

});
function initSection() {
    $sectionContainer.height(winHeight);
    $sections.each(function (index) {
        $sections.eq(index).height(winHeight);
    })

}
function slideAnimation(direction, callback) {
    if(direction == 'up'){
        sliderDistance = winHeight;
        index = index - 1;
    }else if(direction == 'down'){
        sliderDistance = -winHeight;
        index = index + 1;
    }
    $slider.animate({top: '+=' +  sliderDistance}, 400, function () {
        if (callback){
            callback();
        }
    });
}
function throttle(method, delay){
    clearTimeout(tId);
    tId=setTimeout(function(){
        method();
    }, delay);
}

function slideEnd() {
    var content = "<h5 class='second-title'>第" + (index + 1) + "屏的回调函数执行效果";
    $sections.eq(index).append(content);
}


