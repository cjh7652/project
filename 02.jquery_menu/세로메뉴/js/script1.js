const menu=$('.title');


menu.click(function(){
    $(this).next('.sub').toggleClass('on')
});