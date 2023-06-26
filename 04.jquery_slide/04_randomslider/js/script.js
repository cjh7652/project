let sliderPanelImg=$('.slider-panel > img');
let imgWidth=sliderPanelImg.width();
let imgHeight=sliderPanelImg.height();
//console.log(imgWidth)

$('.slider-text').css('left',-300).each(function(index){
    $(this).attr('data-index',index)
});
$('.control-button').each(function(index){
    $(this).attr('data-index',index)
}).click(function(){
    let index=$(this).attr('data-index');
    moveSlider(index)
});
function moveSlider(index){
    randomNum=index;

    let willMoveLeft= -(index%3*imgWidth)
    let willMoveTop= Math.floor(index/3)*-imgHeight;
    $('.slider-panel').animate({left: willMoveLeft},500).animate({top:willMoveTop},500)
    $('.control-button[data-index='+index+']').addClass('active')
    $('.control-button[data-index!='+index+']').removeClass('active')
    $('.slider-text[data-index='+index+']').show().animate({left: 50},500)
    $('.slider-text[data-index!='+index+']').hide().animate({left: -300},500)
}

let randomNum=Math.round(Math.random()*5);
moveSlider(randomNum)

let setIntervalId;

function timer(){
    setIntervalId=setInterval(function(){
        randomNum=Math.floor(Math.random()*5)
        if(randomNum==$('.control-button').size()) randomNum=0;
        $('.control-button').eq(randomNum).trigger('click')

    },3000)
}
timer();


$('.animation-canvas').hover(function(){
    clearInterval(setIntervalId)
},function(){
    timer();
});

$('.left').click(function(){
    randomNum--;
    if(randomNum<0) randomNum=$('.control-button').size()-1;
    $('.control-button').eq(randomNum).trigger('click')
});
$('.right').click(function(){
    randomNum++;
    if(randomNum==$('.control-button').size()) randomNum=0;
    $('.control-button').eq(randomNum).trigger('click')
});
















