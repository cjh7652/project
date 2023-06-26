$('#springBtn a').click(function(e){
    e.preventDefault();
    $('#image').removeClass().addClass('spring');
});
$('#summerBtn a').click(function(e){
    e.preventDefault();
    $('#image').removeClass().addClass('summer');
});
$('#fallBtn a').click(function(e){
    e.preventDefault();
    $('#image').removeClass().addClass('fall');
});
$('#winterBtn a').click(function(e){
    e.preventDefault();
    $('#image').removeClass().addClass('winter');
});