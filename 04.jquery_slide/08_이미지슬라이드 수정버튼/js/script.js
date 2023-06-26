const banner=$('.slideUl>li');
const prev=$('.btnImg > .prev');
const next=$('.btnImg > .next');
const button=$('.buttonList > li')
let cnt=0;
let setIntervalId;

timer();
function timer(){
	setIntervalId=setInterval(function(){
		let prev=banner.eq(cnt)
		let prevBtn=button.eq(cnt)
		move(prev, 0, '-100%')
		prevBtn.removeClass('on')
		cnt++;
		if(cnt ==banner.size()) cnt =0;
		let next=banner.eq(cnt)
		let nextBtn=button.eq(cnt)
		move(next,'100%', 0)
		nextBtn.addClass('on')
	},2000)
}

function move(tg, start, end){
	tg.css('left', start).stop().animate({left: end},500)
}

$('.slide').on({mouseover:function(){
	clearInterval(setIntervalId)
},mouseout:function(){
	timer();
}});

next.click(function(){
	let prev=banner.eq(cnt)
	let prevBtn=button.eq(cnt)
	move(prev, 0, '-100%')
	prevBtn.removeClass('on')
	cnt++;
	if(cnt ==banner.size()) cnt =0;
	let next=banner.eq(cnt)
	let nextBtn=button.eq(cnt)
	move(next,'100%', 0)
	nextBtn.addClass('on')
})

prev.click(function(){
	let prev=banner.eq(cnt)
	let prevBtn=button.eq(cnt)
	move(prev, 0, '100%')
	prevBtn.removeClass('on')
	cnt--;
	if(cnt ==-banner.size()) cnt =0;
	let next=banner.eq(cnt)
	let nextBtn=button.eq(cnt)
	move(next,'-100%', 0)
	nextBtn.addClass('on')
})

button.click(function(){
	let tg=$(this);
	let i=tg.index();
	console.log(i)

	button.removeClass('on')
	tg.addClass('on')

	if(cnt>i){
		if(cnt==i) return;
		let cntEl=banner.eq(cnt);
		let nextEl=banner.eq(i);
		cntEl.css('left',0).stop().animate({left:'100%'},500);
		nextEl.css('left','-100%').stop().animate({left:0},500);
		cnt=i;
	}else{
		if(cnt==i) return;
		let cntEl=banner.eq(cnt);
		let nextEl=banner.eq(i);
		cntEl.css('left',0).stop().animate({left:'-100%'},500);
		nextEl.css('left','100%').stop().animate({left:0},500);
		cnt=i;
	}
})