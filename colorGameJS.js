
var numSquers = 6;
var colors = [];//generateRandomColors(numSquers);
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messegeDisplay = document.querySelector("#messege");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() 
{

	for(var i = 0 ; i < modeButtons.length ; i++)
	{
		modeButtons[i].addEventListener("click",clickedModeBtn)
	}
	resetButton.addEventListener("click",clickedReset);
	//colorDisplay.textContent = pickedColor;	
	for (var i = 0 ; i < squares.length ; i++)
	{

		//squares[i].style.background = colors[i];
		squares[i].addEventListener("click",squreClick);
	}

	reset();
}
function clickedModeBtn()
{
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");

	if(this.textContent === "Easy")
		numSquers = 3;
	else
		numSquers = 6;
	reset();
}
function reset()
{
	colors = generateRandomColors(numSquers);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messegeDisplay.textContent = "";
	for(var i = 0; i < squares.length ; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";	
			squares[i].style.background = colors[i];
		}
		else
		squares[i].style.display = "none";	
		

	}
	h1.style.background = "steelblue";
}
function clickedReset()
{
reset();
}
function changeColors(color)
{
	for( var i = 0 ; i < colors.length ; i++)
	{
		squares[i].style.background = color;
	}
}
function squreClick()  
{
	var clickedColor = this.style.background;

	if(clickedColor === pickedColor)
	{
		messegeDisplay.textContent = "Correct";
		resetButton.textContent = "Play Again?"
		changeColors(clickedColor);
		h1.style.background = clickedColor;
	}
	else
	{
		this.style.background = "#232323";
		messegeDisplay.textContent = "Try again";
	}
}
function pickColor()
{

	var random = Math.floor(Math.random() * colors.length);

	return colors[random];
}
function generateRandomColors (num)
{
	var arr = [];

	for(var i = 0 ; i < num ; i++)
	{
		arr.push(randomColor());
	}

	return arr;
}
function randomColor()
{
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);

	var res = "rgb(" +r.toString()+", "+g.toString()+", "+ b.toString() +")";

	return res;
}