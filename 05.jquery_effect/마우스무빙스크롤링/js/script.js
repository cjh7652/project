const galleryWrap=$('.gallery-wrap');
let offset=galleryWrap.offset().left;
console.log(offset)

galleryWrap.on({mousemove(e){
    console.log(e.pageX)
    if(e.pageX >=1560){
        return false
    }else{
       
        $(this).css({left: -e.pageX })
    }
   
}})