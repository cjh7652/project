const menu=$('.title');
$('.sub').hide();

/* menu.on('click', function(){
    $('.sub').hide();
    $(this).next().show()
}) */

menu.on('click', function(){
    if($(this).next().css('display') =="none"){
        $('.sub').slideUp();
    }
   
    $(this).next().slideDown("fast")
})
