let cnt=0;
let n=jQuery('.slide').length-1;
let delta=0; //휠 델타값
let t=0 //마우스 휠 토글변수
let z=0; // cnt 이전 다음
let setIntervalId;

$('.arrowNextBt').on('click', function(){
    nextCountfn();
})
$('.arrowPrevBt').on('click', function(){
    prevCountfn()
})

//자동슬라이드
autoPlay();
function autoPlay(){
    setIntervalId=setInterval(nextCountfn, 3000)
}

//일시 정지
$('#section1').on({mouseenter:function(){
    clearInterval(setIntervalId)
    mouseWheelEventFn()
}, mouseleave:function(){
    autoPlay();
}});

//터치 이벤트
$('.slide-wrap').swipe({
    swipeLeft: function(){
        nextCountfn()
    },
    swipeRight: function(){
        prevCountfn()
    }
});

//마우스 휠 이벤트 함수 
function mouseWheelEventFn(){
    $('#section1').on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        console.log(e)
        if(e.originalEvent.detail){//파이어폭스
            delta=-e.originalEvent.detail*40;
        }else if(e.originalEvent.wheelDelta){//파이어폭스제외 나머지 브라우저
            delta=-e.originalEvent.wheelDelta;
        }

        if(t==0){
            t=1;
            if(delta<0){
                nextCountfn()
            }else{
                prevCountfn()
            }
            setTimeout(function(){
                t=0;
            },100)
        }
    });
}


//다음으로 이동
function nextCountfn(){
    cnt++;
    if(cnt>n){cnt=0}
    z=(cnt==0? n:cnt-1)
    mainNextSlidefn()
}

//이전버튼 이동
function prevCountfn(){
    cnt--;
    if(cnt<0){cnt=n}
    z=(cnt==n? 0:cnt+1)
    mainPrevSlidefn()
}
//페이지 네이션
function pageBtfn(){
    $('.pageBt').removeClass('addPageBt');
    $('.pageBt').eq(cnt).addClass('addPageBt');
}

$('.pageBt').each(function(index){
    $(this).on('click', function(){
        if(cnt < index){
            z=cnt; //현재 실행중인 cnt
            cnt=index; //클릭한 버튼
            mainNextSlidefn()
        }else  if(cnt >index){
            z=cnt; //현재 실행중인 cnt
            cnt=index; //클릭한 버튼
            mainPrevSlidefn()
        }
    })
});


//메인 슬라이드 다음슬라이드 함수
function mainNextSlidefn(){
    pageBtfn()
    if(!$('.slide li').is(':animated')){
        $('.slide').css({zIndex:1}).find('li').animate({width: (25*1)+'%'},0)
        $('.slide').eq(z).css({zIndex:2}).find('li').animate({width: (25*1)+'%'},0)
        $('.slide').eq(cnt).css({zIndex:3}).find('li').animate({width: (25*0)+'%'},0).animate({width: (25*1)+'%'},800)
    }else{
        return false
    }
}
//메인 슬라이드 이전슬라이드 함수
function mainPrevSlidefn(){
    pageBtfn()
   if(!$('.slide li').is(':animated')){
        $('.slide').css({zIndex:1}).find('li').animate({width: (25*1)+'%'},0)
        $('.slide').eq(z).css({zIndex:3}).find('li').animate({width: (25*1)+'%'},0).animate({width: (25*0+'%')},800)
        $('.slide').eq(cnt).css({zIndex:2}).find('li').animate({width: (25*1)+'%'},0)
    }else{
        return false
    } 
} 