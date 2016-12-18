//Global Variables 

var goal = 0;
var crystalOneValue = 0;
var crystalTwoValue = 0;
var crystalThreeValue = 0;
var crystalFourValue = 0; 
var totalScore = 0;
var winCount = 0;
var lostCount =0;


//Functions 

//creates random values for crystals and target 
function randomize(){

	goal = Math.floor(Math.random() * ((120-19)+1) + 19);
	crystalOneValue = Math.floor(Math.random() * ((12-1)+1) + 1);
	crystalTwoValue = Math.floor(Math.random() * ((12-1)+1) + 1);
	crystalThreeValue = Math.floor(Math.random() * ((12-1)+1) + 1);
	crystalFourValue = Math.floor(Math.random() * ((12-1)+1) + 1);
	console.log("goal is" + goal +" 4: " + crystalFourValue + " 3: " + crystalThreeValue + " 2: " + crystalTwoValue + " 1: " + crystalOneValue);

}

//checks to see if you won or lost 
function winner(){
	if(totalScore === goal){
		winCount++;
		$("#results").html("You Won!<br><br>Wins: " + winCount + "<br><br>Losses: " + lostCount+ "<br>");
		totalScore = 0;
		$("#score").html(totalScore);
		newGame();
	}

	if(totalScore > goal){
		lostCount++;
		$("#results").html("You Lost!<br><br>Wins: " + winCount + "<br><br>Losses: " + lostCount + "<br>");
		totalScore = 0;
		$("#score").html(totalScore);
		newGame();
	}
}

//crystals 1-12
//goal 19-120

//Main Process 

var newGame = function(){
console.log("newgame");
randomize();



//writes the target score 
$("#target").html("<h3>" + goal +"</h3><br><br><br>");

//adds value of crystal one when cyrstal one clicked 
$("#crystalOne").unbind().click(function(){
	totalScore = totalScore + crystalOneValue;
	console.log("crystal one " + crystalOneValue);
	$("#score").html(totalScore);
	winner();
});

//adds value of crystal two when crystal two clicked 
$("#crystalTwo").unbind().click(function(){
	totalScore = totalScore + crystalTwoValue;
	$("#score").html(totalScore);
	winner();
});

$("#crystalThree").unbind().click(function(){
	totalScore = totalScore + crystalThreeValue;
	$("#score").html(totalScore);
	winner();
});

$("#crystalFour").unbind().click(function(){
	totalScore = totalScore + crystalFourValue;
	$("#score").html(totalScore);
	winner();
});

console.log(totalScore);
console.log(goal);




}
newGame();