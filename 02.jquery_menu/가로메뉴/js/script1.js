$('nav>ul').hover(function(){
    $(this).stop().animate({height:250},500)
},function(){
    $(this).stop().animate({height:40},500)
});

$('nav>ul').focusin(function(){
    $(this).stop().animate({height:250},500)
})
$('nav>ul').focusout(function(){
    $(this).stop().animate({height:40},500)
})