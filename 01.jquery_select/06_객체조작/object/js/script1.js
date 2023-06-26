//before/after/insertBefore/insertAfter
$('#beforeAfter p:eq(2)').after("<p>After에 의한 내용 삽입하기</p>").css('background','yellowgreen');
$("<p>insertAfert에 의한 내용</p>").insertAfter('#beforeAfter p:eq(1)').css('background','yellow') 

$('#beforeAfter p:eq(1)').before("<p>Before에 의한 내용 삽입하기</p>").css('background','pink');
$("<p>insertBefore에 의한 내용</p>").insertBefore('#beforeAfter p:eq(0)').css('background','skyblue') 

//append/appendTo/prepend/prependTo
const basket=$('#basket');
const apple=$('#apple');
const banana=$('#banana');
const orange=$('#orange');

/* basket.append(apple)
basket.append(orange)
basket.append(banana) */

/* apple.appendTo(basket)
banana.appendTo(basket)
orange.appendTo(basket) */

/* basket.prepend(apple)
basket.prepend(orange)
basket.prepend(banana) */

apple.prependTo(basket)
banana.prependTo(basket)
orange.prependTo(basket)

//clone/remove/empty
let copyObj=$('.clone1').children().clone();
console.log(copyObj)
let obj2=$('.remove')
copyObj.prependTo(obj2)

/* $('.empty').remove(); */
$('.empty').empty();


//replaceAll/replaceWith
/* $('section h2').replaceWith('<h3>replace methode</h3>')*/
$('<p>change</p>').replaceAll('section div') 


/* $('section h2').mouseover(function(){
    $(this).replaceWith('<h3>replace methode</h3>')
}) */
/* $('section h3').mouseover(function(){
    $(this).css('color','red')
}) */

$(document).on('mouseover','section h2', function(){
    $(this).replaceWith('<h3>replace method</h3>')
})

$(document).on('mouseout','section h3', function(){
    $(this).replaceWith('<h2>제목1</h2>')
})


//show/hide
$('#show').show();
$('#hide').hide();

//fadeIn/fadeOut/fadeTo

$('#fadeIn').fadeIn(2000);
$('#fadeOut').fadeOut(2000);
$('#fadeTo').fadeTo(5000,0.3);

//slideDown/slideUp
$('#slideDown').slideDown(1000);
$('#slideUp').slideUp(1000);
$('.hover').hover(function(){
    $(this).find('#slide').slideDown(2000)
},function(){
    $(this).find('#slide').slideUp(2000)
})

//animate
$('.ani1').animate({left: '300px', top: 200},1000);
$('.ani2').delay(1000).animate({bottom:400},2000).animate({bottom:50, right:500},1000).animate({bottom:80, right:650},1000);