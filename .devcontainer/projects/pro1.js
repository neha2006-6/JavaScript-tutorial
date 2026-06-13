let grey=document.getElementById('grey');
let white = document.getElementById("white");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");

grey.addEventListener("click",function()
{
    document.body.style.backgroundColor="grey";
});
white.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

yellow.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});