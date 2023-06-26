$('.slideshow').each(function(){
    let container=$(this);
    let timer;
    function switchImg(){
        let anchors=container.find('a');
        let first=anchors.eq(0);
        let second=anchors.eq(1);
        first.fadeOut(500).appendTo(container);
        second.fadeIn(500);
    }
    //setInterval(switchImg, 3000)
    function startTimer(){
        timer=setInterval(switchImg, 3000)
    }
    function stopTimer(){
        clearInterval(timer)
    }
    container.find('a').hover(stopTimer,startTimer )
    startTimer()
});