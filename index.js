var readlineSync = require("readline-sync");
 var score =0 ;
//user detailed

//function
var questions = [{
  question: "where i live? ",
  answer: "Nashik"
},{
  question:"my favrouite destinatiion? ",
  answer: "Leh Ladakh"
},{
  question: "who motivates me? ",
  answer: "Myself"
}];

function welcome(){
  var userName = readlineSync.question("what is your name?..\n");
console.log("Welcome " + userName + " Do you know prabhat");
}


function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("riht!!");
    score = score+1;
  }else{
    console.log("wrong");
  }

  console.log("your score is: ", score);
  console.log("-------------");

}

function game(){
  for (var i = 0;i<questions.length;i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer)
  }
}


function showscore(){
  console.log("Great your score is : ", score);
}
welcome();
game();
showscore();