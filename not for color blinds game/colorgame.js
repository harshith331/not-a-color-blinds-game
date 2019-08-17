
var squares = document.querySelectorAll(".square");
var  colorDisplay =  document.getElementById("colorDisplay");
var correct = document.querySelector(".correct")
var again = document.querySelector(".again")
var h1 = document.querySelector(".top");
var h3 =document.querySelector("h3");
var messageDisplay=document.querySelector("#message")
var resetButton = document.querySelector("#reset")
var colors = generateRandomColors(6);
var pickedColor= pickColor();
var score=5;



colorDisplay.textContent= pickedColor;


resetButton.addEventListener("click",function()
{
  reset();
});



for(var i=0; i<squares.length ; i++)
{
  //add initial color to the boxes
  squares[i].style.backgroundColor = colors[i];


  //make changes when clicked on it

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
      //if color matches the picked color
      if(clickedColor===pickedColor){
        h1.style.backgroundColor=pickedColor;
        messageDisplay.textContent="correct!!!";
        messageDisplay.classList.remove("again");
        messageDisplay.classList.add("correct");

        for(var i = 0; i < squares.length; i++){
      		//change each color to match given color
      		squares[i].style.background = pickedColor;
      	}

        resetButton.textContent="Play Again!";
        h3.textContent=score;

      }

      //if it dosent
      else{
        this.style.backgroundColor= "black"
        messageDisplay.textContent="try again!!!"
          messageDisplay.classList.add("again");
          score--;

      }

  });
}



function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
  var arr=[]

  for(var i=0;i<num;i++)
  {
    arr.push(randomColor())
  }

  return arr;
  console.log(arr);


}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function reset(){

colors = generateRandomColors(6);
pickedColor= pickColor();
colorDisplay.textContent= pickedColor;

messageDisplay.classList.remove("correct");
messageDisplay.classList.remove("again");
messageDisplay.textContent="";

for(var i=0; i<squares.length ; i++)
{
  //add initial color to the boxes
  squares[i].style.backgroundColor = colors[i];
}

// h1.classList.toggle("top");
h1.style.backgroundColor="#0E61A6";
resetButton.textContent="New colors!"
score=5;
h3.textContent="X";

}
