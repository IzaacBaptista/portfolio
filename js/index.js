var toggle = document.querySelector(".toggle");
var body = document.querySelector("body");

toggle.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

body.addEventListener("click", function(){
    document.querySelector("show-menu").classList.body(".sidebar");
});