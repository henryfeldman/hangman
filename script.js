var word = "";
var easyWords=["bus", "letter","bear","easy","car","end"];
var mediumWords=["fireplace","spanish","creative","polarity","mushroom","valet","shoplift"];
var hardWords=["extinguish","gymnastics","porcupine","sarcophagus","cummerbund","virtuoso"];
var guessedLetters = [];
var lives = 5;




function startGame(){
    var wordDifficulty=document.getElementById("difficulty").value;
    if (wordDifficulty =="Easy"){
        word= easyWords[Math.floor(Math.random()*easyWords.length)];
    }
    if (wordDifficulty=="Medium"){
        word= mediumWords[Math.floor(Math.random()*mediumWords.length)];

    }
    if (wordDifficulty=="Hard"){
        word= hardWords[Math.floor(Math.random()*hardWords.length)];
    }


console.log(word);
printWord();
}


function printWord(){
    var answer = "";
    for (i=0; i < word.length;i++){
        if (guessedLetters.indexOf(word[i]) >=0){
            answer += word[i];

        }else{
            answer += "_ ";
        }

        document.getElementById("answer").innerHTML=answer;
    }
    document.getElementById("images").src = "img/step1.png";
    if (answer==word){
        document.getElementById("winOrLose").innerHTML="CongratuLATIONS YOU ARE A WINNER";
    }

}

function guessLetter(){
    var letter = document.getElementById("guessLetter").value;
    if (guessedLetters.includes(letter) || letter.length >1) {
        return false;
    }
    guessedLetters.push(letter);
    printWord();
    document.getElementById("lettersGuessed").innerHTML= "Guessed Letters: " + guessedLetters + "";
    console.log(guessedLetters);

    if(word.indexOf(letter) == -1){
        lives -= 1;
    }
    document.getElementById("graveyard").innerHTML="Lives: " + lives;

    if (lives==5){
        document.getElementById("images").src = "img/step1.png";
    }
    if(lives==4){
        document.getElementById("images").src = "img/step2.png";
    }
    if (lives==3){
        document.getElementById("images").src = "img/step3.png";
    }
    if(lives==2){
        document.getElementById("images").src = "img/step4.png";
    }
    if(lives==1){
        document.getElementById("images").src="img/step5.png";
    }
    if(lives==0){
        document.getElementById("images").src="img/step6.png";
        document.getElementById("guess").disabled=true;
        document.getElementById("play").disabled=true;
        document.getElementById("winOrLose").innerHTML="Uh oh it seems that you have lost. The correct answer " +
            "was: " + word;
        document.getElementById("reload").disabled=false;
    }
}
function reloadPage() {
    word = "";
    guessedLetters = [];
    lives = 5;
    document.getElementById("images").src="img/step1.png";
    document.getElementById("guess").disabled=false;
    document.getElementById("play").disabled=false;
    document.getElementById("winOrLose").innerHTML="";
    document.getElementById("lettersGuessed").innerHTML="";
    document.getElementById("graveyard").innerHTML="Lives: " +lives;
    startGame()
}
