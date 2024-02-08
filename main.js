/* JS Practice */



function disappear() {
document.getElementById("changer").style.cssText=`
font-size: 40px;
color: red;
border: 3px solid white;
transition: 0.25s ease-in-out;
`
document.getElementById("changer").innerHTML = "Paragraph changed"
}

function colorChange(){ 
    document.getElementById("hoverer").style.cssText=`
    background-color: white;
    color: black;
    transition = 0.5s ease-in-out;
    `

    document.getElementById("hovererBox").style.cssText=`
    background-color: white;
    transition = 0.5s ease-in-out;
    
    `
}


document.getElementById("area").addEventListener("mouseover", betterColorChange,);
document.getElementById("area").addEventListener("mouseout", betterColorChange2);

function betterColorChange2(){
    document.getElementById("area").style.cssText=`
    background-color: none;
    transition: 0.5s ease-in-out;
    `
}

function betterColorChange(){
    document.getElementById("area").style.cssText=`
    background-color: white;
    transition: 0.5s ease-in-out;
    `
}

/* JS Rock Paper scissors */

/* display game */
var botWinvLoss = 0;
var userWinvLoss = 0;
document.getElementById("RPStrigger").addEventListener("click", function() {RPSopen()});
document.getElementById("closebttn").addEventListener("click", function() {RPSclose()});

function RPSopen() {
    document.getElementById("containerRPStoggle").style.cssText=`
    scale: 100%;
    transition: 0.5 ease-in-out;
    `
    document.getElementById("shieldtoggle").style.cssText=`
    scale: 100%;
    transition: 0.5 ease-in-out;
    `
}

function RPSclose() {
    botWinvLoss = 0;
    userWinvLoss = 0;
    document.getElementById("containerRPStoggle").style.cssText=`
    scale: 0%;
    transition: 0.5 ease-in-out;
    `
    document.getElementById("shieldtoggle").style.cssText=`
    scale: 0%;
    transition: 0.5 ease-in-out;
    `
    /* reset */
    document.getElementById("userwinloss").innerHTML = userWinvLoss;
    document.getElementById("winloss").innerHTML = botWinvLoss;
    document.getElementById("declare").innerHTML = "no outcome";
    document.getElementById("outcome").innerHTML = "";
    document.getElementById("userOutcome").innerHTML = "";
    document.getElementById("RPSIMG").src='images/RPSquestion.png';
    document.getElementById("RPSIMG1").src='images/RPSquestion.png';

}

/* generates results when spun, rock, paper, scissor */
function RPSoutcome(RPSuser, assignment) {

/* array for storing variables to be randomized*/
var RPSlib = [1, 2, 3];
/* innit new var that returns a random number between RPSlib array length, in this case it is between 1 -3*/
var RPSrandom = Math.floor((Math.random()*RPSlib.length));
/* innit new var that returns the str returned by random var from RPSrandom */
var RPSrandomoutcome = RPSlib[RPSrandom];
/* should replace outcome str in html with outcome of random spin */


/* Translators from int to str */
if (RPSrandomoutcome == 1){ 
    document.getElementById("outcome").innerHTML = "rock";
    document.getElementById("RPSIMG1").src='images/RPSrock.png';
 }
if (RPSrandomoutcome == 2){ 
    document.getElementById("outcome").innerHTML = "paper"; 
    document.getElementById("RPSIMG1").src='images/RPSpaper.png';
}
if (RPSrandomoutcome == 3){ 
    document.getElementById("outcome").innerHTML = "scissor";
    document.getElementById("RPSIMG1").src='images/RPSscissor.png';
}

if (assignment == 1 ){document.getElementById("RPSIMG").src='images/RPSrock.png';}
if (assignment == 2 ){document.getElementById("RPSIMG").src='images/RPSpaper.png';}
if (assignment == 3 ){document.getElementById("RPSIMG").src='images/RPSscissor.png';}
document.getElementById("userOutcome").innerHTML = RPSuser;

/*if(strcmp(outcome, userOutcome) == 0){*/

if(RPSrandomoutcome == assignment){
    document.getElementById("declare").innerHTML = "tie";

}

if( RPSrandomoutcome == 2 && assignment == 1){
    document.getElementById("declare").innerHTML = "User Loses";
    botWinvLoss += 1;
}

if( RPSrandomoutcome == 2 && assignment == 3){
    document.getElementById("declare").innerHTML = "User Wins";
    userWinvLoss += 1;
}

if( RPSrandomoutcome == 1 && assignment == 2){
    document.getElementById("declare").innerHTML = "User Wins";
    userWinvLoss += 1;
}

if( RPSrandomoutcome == 1 && assignment == 3){
    document.getElementById("declare").innerHTML = "User Loses";
    botWinvLoss += 1;
}

if( RPSrandomoutcome == 3 && assignment == 1){
    document.getElementById("declare").innerHTML = "User Wins";
    userWinvLoss += 1;
}


if( RPSrandomoutcome == 3 && assignment == 2){
    document.getElementById("declare").innerHTML = "User Loses";
    botWinvLoss += 1;
}
document.getElementById("userwinloss").innerHTML = userWinvLoss;
document.getElementById("winloss").innerHTML = botWinvLoss;
}


document.getElementById("rockBttn").addEventListener("click", function() {RPSoutcome("rock", 1)});
document.getElementById("paper_bttn").addEventListener("click", function() {RPSoutcome("paper", 2)});
document.getElementById("scissor_bttn").addEventListener("click", function() {RPSoutcome("scissor", 3)});


/* event listener hover rps */

document.getElementById("RPStag").addEventListener("mouseover", function() {tagRPS()});
document.getElementById("RPStag").addEventListener("mouseout", function() {tagRPS2()});



function tagRPS() {
    document.getElementById("RPStag").style.cssText=`
    background-color: black;
    color: white;
    `
}

function tagRPS2() {
    document.getElementById("RPStag").style.cssText=`
    background-color: none;
    color: black;
    `
}

/* Event listener keyboard review, this also doesn't work at all*/

const KEY_HANDLERS = {
    F1: () => console.log('You pressed F1.'),
    ArrowUp: () => console.log('You pressed ↑.'),
    KeyA: () => console.log('You pressed A.'),
  };

document.addEventListener('keydown', (e) => {
    e.preventDefault();

    const handler = KEY_HANDLERS[e.code];
    
    if (handler) {
      handler();
      return;
    }
    
    console.log('Pressed a key without a handler.')
});



/* lol code that doesnt work */
function mouseHandler(status){
    status ? sayTrue() : sayFalse()
}

function sayTrue() {
    document.getElementById("area2").style.cssText=`
    background-color:white;
    `
}

function sayFalse() {
    document.getElementById("area2").style.cssText=`
    background-color:none;
    `
}


function stringRand() {
    let x = Math.floor(Math.random()*10);
    let even = 10;
    let odd = 10;

    if (x/2 > 0) {
        even + 1;
    }
    else {
        odd + 1;
    }

    document.getElementById("randstring").innerHTML = x
    document.getElementById("randstringe").innerHTML = even
    document.getElementById("randstringo").innerHTML = odd
}


let x = Math.floor(Math.random()*10);
let even = 10;
let odd = 10;

if (x/2 > 0) {
    even + 1;
}
else {
    odd + 1;
}

console.log("this is x" + ": " + x);
console.log("even" + ": " + even);
console.log("odd" + ": " + odd);

