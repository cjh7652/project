$('#springBtn a').click(function(e){
    e.preventDefault();
    $('#image > img').attr({src:'./images/spring.jpg', alt:'봄'});
});

$('#summerBtn a').click(function(e){
    e.preventDefault();
    $('#image > img').attr({src:'./images/summer.jpg', alt:'여름'});
});