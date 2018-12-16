//DEMO DE $.getJSON() AVEC HANDLEBARS

var source   = $("#borg-template").html();
var template = Handlebars.compile(source);

$.getJSON("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")
.done(function(data){
    let html = template(data);
    $("#container").html(html);

    //50 hommes et 50 femmes dans le text du millieu
    let hommes = $('[data-gender="Male"]').length;
    let femmes = $('[data-gender="Female"]').length;
    $(".male").prepend(hommes + " ")
    $(".female").prepend(femmes + " ")
})
.fail(function(){
	alert("oooops");



});





//bouton de selection
$(".middle-block__buttons .but").click(function(){
    let genre = $(this).data("filter");
    $('.box').hide();
    $('[data-gender='+genre+']').show();
    if (genre == "All") {
     $('.box').show();
    }


})


//50 hommes et 50 femmes dans le text du millieu (ne marche plus)

// let hommes = $('[data-gender="Male"]').length;
// let femmes = $('[data-gender="Female"]').length;

// $(".male").prepend(hommes + " ")
// $(".female").prepend(femmes + " ")


