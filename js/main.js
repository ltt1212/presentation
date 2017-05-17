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

initSection();

$win.keydown(function (e) {
    if (e.which == 38 && index > 0){
        slideAnimation('up', function () {
            console.log("uo");
        });
    }else if(e.which == 40 && index < 3 ){
        slideAnimation('down');
    }
});
$win.on('resize', function () {
    winHeight = $win.height();
    initSection();
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
    $slider.animate({top: '+=' +  sliderDistance}, 300, function () {
        console.log($slider.position().top);
        if (callback){
            callback();
        }
    });
}
