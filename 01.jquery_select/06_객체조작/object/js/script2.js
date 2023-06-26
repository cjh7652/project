$('.btn1').on("mouseover focus", function(){
    $('.on').text("welcome");
});
$('.btn1').on("mouseout blur", function(){
    $('.on').text("by");
});


/* $('.btn2').on({"mouseover focus" : function(){
    $('.on2').text("welcome");
} 
}); */
$('.btn2').on({"mouseout blur" : function(){
    $('.on2').text("by");
} 
});

$('.btn2').on({"mouseover":function(){

},"focus":function(){

}})

$('.btn3').click(function(){
    $(this).parent().next().css({"color":'green', "font-weight":"bold", "fontSize":"20px"})
});

$('.btn4').mouseover(function(){
    $(this).parent().next().css({"color":'red', "font-weight":"bold", "fontSize":"20px"})
});

/* $('.btn3').off("click") */
$('.btn4').trigger("mouseover")
$('.btn3').click();

//
$('.btn5').on('click', function(e){
    e.preventDefault();
    $('.txt1').css({"background":'red'});
})

$('.btn6').on('click', function(){
    $('.txt2').css({"background":'yellow'});
    return false;
})

$('.clickTest').click(function(){
    $(this).text('내용 바뀜')
})

const div1=$('#div1');
const div1Width=div1.width()
const div1size=div1.css('font-size')
console.log(div1Width)
$('.div1-1').text(div1Width);