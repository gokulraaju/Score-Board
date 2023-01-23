var team1 = document.getElementById("score1");
var team2 = document.getElementById("score2");
var countA = 0;
var countB = 0;
var teams = "";
function colorChange(){
    if(countA === countB){
        document.getElementById("score1").style.color = "yellow";
        document.getElementById("score2").style.color = "yellow";
    }
    else if(countA > countB){
        document.getElementById("score1").style.color = "green";
        document.getElementById("score2").style.color = "red";
    }
    else{
        document.getElementById("score1").style.color = "red";
        document.getElementById("score2").style.color = "green";
    }
}
function lead(){
    if(countA>countB){
        document.getElementById("maximum").innerHTML = "TEAM A";
        teams="TEAM A";
    }
    else if(countA===countB){
        document.getElementById("maximum").innerHTML ="Score Tie";
        teams="DRAW";
    }
    else{
        document.getElementById("maximum").innerHTML = "TEAM B";
        teams="TEAM B";
    }
}
function one_1(){
    countA+=1;
    team1.value = countA.toString();
    colorChange();
    lead();
}
function one_2(){
    countA+=2;
    team1.value = countA.toString();
    colorChange();
    lead();
}
function one_3(){
    countA+=3;
    team1.value = countA.toString();
    colorChange();
    lead();
}
function two_1(){
    countB+=1;
    team2.value = countB.toString();
    colorChange();
    lead();
}
function two_2(){
    countB+=2;
    team2.value = countB.toString();
    colorChange();
    lead();
}
function two_3(){
    countB+=3;
    team2.value = countB.toString();
    colorChange();
    lead();
}
function newGame(){
    countA = 0;
    countB = 0;
    team1.value = 0;
    team2.value = 0;
    document.getElementById("score1").style.color = "grey";
    document.getElementById("score2").style.color = "grey";
    document.getElementById("maximum").innerHTML = "";
    document.getElementById("pWin").innerHTML = teams;
}