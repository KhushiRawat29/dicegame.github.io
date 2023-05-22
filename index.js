 
var number=Math.random();
number=Math.floor((number*6) + 1);
var randomimage="dice" + number + ".png";
var randomsource="/images" + randomimage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource );
// dice 2

var n2=Math.random();
n2=Math.floor((n2*6) +1);
var randomimage2="dice" + n2 + ".png";
var randomsource2="/images" + randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomsource2);

if(number > n2)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(number < n2)
{
    document.querySelector("h1").innerHTML="player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="its a tie";
}
