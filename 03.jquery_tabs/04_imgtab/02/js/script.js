$('.thumbs em').hide();

$('.thumbs a').click(function(){
    $('#caption').remove();
    let path=$(this).attr('href');
    $('#largeImg img').attr({src:path});
    let msg=$(this).next('em').text();
   console.log(msg)

    $('#largeImg').append('<div id="caption"></div>');
    $('#largeImg #caption').text(msg);
    let posy=$('#largeImg #caption').outerHeight()
    console.log(posy)

    $('#largeImg #caption').animate({top:-posy},300)

    return false;
});