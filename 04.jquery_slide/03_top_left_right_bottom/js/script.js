let current=0;
let banner=$('#wrapper ul li')

setInterval(function(){
    let prev=banner.eq(current);
    move(prev, 0, '-100%');
    current++;
    if(current==banner.size()) current=0;
    let next=banner.eq(current)
    move(next,'100%',0)
},2000)




function move(tg, start, end){
    tg.css('top', start).stop().animate({top: end},500)
}

