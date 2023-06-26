let tab=$('#tab > li');
let conent=$('#content>div')

tab.on('click', function(e){
    e.preventDefault();
    let tg=$(this);
    let tc=tg.find('>a');
    let i=tg.index();

    tab.find('>a').removeClass('on')
    tc.addClass('on')
    conent.css('display','none')
    conent.eq(i).css('display','block')
})

let el=$('#content>div>img')

let urls=[
    'https://www.naver.com',
    'https://www.daum.net',
    'https://www.google.com',
    'https://www.nate.com'
]

el.on({mouseover:function(){
    let tg=$(this);
    tg.addClass('on')
}, mouseout:function(){
    let tg=$(this);
    tg.removeClass('on')
}, click:function(){
    let tg=$(this);
    let i=tg.parent().index();
    let linkURL=urls[i];
    //location.href=linkURL;
    window.open(linkURL)
}})


