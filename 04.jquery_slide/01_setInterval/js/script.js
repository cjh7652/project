$('.slideshow').each(function(){
    let container=$(this);
    function switchImg(){
        let imgs=container.find('img');
        let first=imgs.eq(0);
        let second=imgs.eq(1);
        first.fadeOut().appendTo(container);
        second.fadeIn();
    }
    setInterval(switchImg, 3000)
});