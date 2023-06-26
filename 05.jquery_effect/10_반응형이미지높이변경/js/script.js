$(window).resize(function(){
    let boxWidth=$('img').width()
    let boxHegith=$('img').height()
    //console.log(boxWidth)

    if(boxWidth<1920){
       
        $('#main').height(boxHegith);
    }
})