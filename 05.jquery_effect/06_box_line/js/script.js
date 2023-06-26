const topLine=$('.top-line')
const bottomLine=$('.bottom-line')
const leftLine=$('.left-line')
const rightLine=$('.right-line')

setInterval(function(){
    topLine.css('left','-100%').animate({left:0},500)
    bottomLine.css('left','100%').animate({left:0},500)
    leftLine.css('top','100%').animate({top:0},500)
    rightLine.css('top','-100%').animate({top:0},500)
},2000)