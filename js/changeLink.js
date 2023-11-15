// call back fuction
// $('body').hide().fadeIn(2000, function(){alert("done")});

/* how jquery event works */
$('h1').click(function(){
    $(this).text("Hide the image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

// play with jquery .each function

//update the image link
$('img').each(function(){
    var path = $(this).attr('src');
    var newpath = "img/" + path;
    $(this).attr("src",newpath);
    console.log(newpath);

});

$('a').each(function(){
    var google = $(this).attr('href');
    var togoogle = "https://www.google.com" ;
    $(this).attr("href", togoogle);
    console.log(togoogle);
    $(this).css("color", "blue");

})