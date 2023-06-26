//box1 text, html 조작
//$('#div1').text(''); // 안에 텍스를 비워
//$('#div1').text('text메소드에서의 내용을 바꿔 써 봤어요'); 
$('#div2').html('html메소드에서의 내용을 바꿔 써 봤어요'); 
$('#div3').text('<strong>text메소드 </strong> 내용 바꿨지요'); 
$('#div4').html('<strong>html메소드 </strong> 내용 바꿨지요'); 

$('#div1').hover(function(){
    $('#div1').text('text메소드에서의 내용을 바꿔 써 봤어요');
},function(){
    $('#div1').text('원래내용이 뭐지?');
})

//box2 src
//var a=$('#changeThis').attr('src','./img/img2.gif');

$('.box2 img').hover(function(){
    $(this).attr('src','./img/img2.gif')
},function(){
    $(this).attr('src','./img/img1.gif')
});

//add, remove
$('#box3-1').addClass('add');
$('#box3-2').removeClass('add');
$('#box3-3').addClass('remove');
$('#box3-4').removeClass('remove');

//toggle
$('.click').click(function(){
    $('#imgs').find('img').toggleClass('transi');
});

//val
 $('#input1').val("내용 바꿈");

$('#textarea1').val("텍스트에어에 있는 내용");
let a=$('#select1').val('city3');
console.log(a)

$('#select2').val(['town2', 'town3']);

//empty
$('.empty').empty();

//1.수치조작
const wid1=$('#p1').width();
console.log(wid1)
const wid2=$('#p1').innerWidth();
console.log(wid2)
const wid3=$('#p1').outerWidth();
console.log(wid3)

$('#p2').outerWidth(300).outerHeight(370);

//2.위치
let $txt1=$('.txt-1 span' )
let $txt2=$('.txt-2 span' )
let $box=$('#wrap1 .box1' )

let off_t=$box.offset().top;
let pos_t=$box.position().top;
$txt1.text(off_t)
$txt2.text(pos_t)

//3스크롤 위치
let topNum=$('.bar').offset().top;
//console.log(topNum)
$(window).scrollTop(topNum);

let sct=$(window).scrollTop();
console.log(sct)