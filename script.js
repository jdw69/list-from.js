// let names = ["Joe", "Adam", "Nórika", "Éva"];

// $('article').append(`<ul><li>fxhjgfxghj</li></ul>`)

let names = ["Joe", "Adam", "Nórika", "Éva"];

function nevsor(nevek) {
  $(".firstName").append('<li class="nameList"></li>');
  $(".namelist li:last-of-type").text(nevek);
}
names.forEach(nevsor);

//    $('.namelist li:last-of-type').text(nevek)

/*
$("article").append('<ul class="firstName"></ul>');
$(".firstName").append('<li class="nameList"></li>');
$(".namelist li:last-of-type").text(names);
*/

let szinek = ["orange", "magenta", "red", "brown", "green", "blue", "teal"];

function egySzinDoboz(szin) {
  $(".kontener").append('<div class="doboz"></div>');
  $(".kontener div:last-of-type").css("background-color", szin);
}
egySzinDoboz("lime");
egySzinDoboz("pink");

szinek.forEach(egySzinDoboz);

/*
function szinLista(szin) {
  $(".firstName").append('<li class="nameList"></li>');
  $(".namelist li:last-of-type").css("background-color", szin);
}
szinek.forEach(szinLista);
*/
