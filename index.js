var randomnumver= Math.floor(Math.random()*6)+1;
var randomdeiceimg="./images/dice"+randomnumver+".png";
var image1= document.querySelectorAll("img")[0].setAttribute("src",randomdeiceimg);

var randomnumver2= Math.floor(Math.random()*6)+1;
var randomdeiceimg2="./images/dice"+randomnumver2+".png";
var image2= document.querySelectorAll("img")[1].setAttribute("src",randomdeiceimg2);


if(randomnumver>randomnumver2){
    document.querySelector("h1").innerHTML=("Player 1 win");
}
else if(randomnumver<randomnumver2){
    document.querySelector("h1").innerHTML=("Player 2 win");
}
else{
    document.querySelector("h1").innerHTML("Draw");
}


