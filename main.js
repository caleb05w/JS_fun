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

/* event generator */






/* generates results when spun, rock, paper, scissor */
function RPSoutcome(RPSuser, assignment) {
/* array for storing variables to be randomized*/
var RPSlib = [1, 2, 3];
/* innit new var that returns a random number between RPSlib array length, in this case it is between 1 -3*/
var RPSrandom = Math.floor((Math.random()*RPSlib.length));
/* innit new var that returns the str returned by random var from RPSrandom */
var RPSrandomoutcome = RPSlib[RPSrandom];
/*prints str returned by RPSrandomoutcome, lets me moniter test */
console.log(RPSrandomoutcome)
/* should replace outcome str in html with outcome of random spin */

if (RPSrandomoutcome == 1){ document.getElementById("outcome").innerHTML = "scissor"; }
if (RPSrandomoutcome == 2){ document.getElementById("outcome").innerHTML = "rock"; }
if (RPSrandomoutcome == 3){ document.getElementById("outcome").innerHTML = "paper"; }

document.getElementById("userOutcome").innerHTML = RPSuser;

/*if(strcmp(outcome, userOutcome) == 0){*/

if(outcome == userOutcome){
    document.getElementById("declare").innerHTML = "tie";

}
    else {
        document.getElementById("declare").innerHTML = "no tie";
    }


    /* okay so like

    rock > scissor

    scissor > rock

    rock > paper

    

/* if (condition) {
    function
}
*/

}



document.getElementById("rockBttn").addEventListener("click", function() {RPSoutcome("rock", 1)});
document.getElementById("paper_bttn").addEventListener("click", function() {RPSoutcome("paper", 2)});
document.getElementById("scissor_bttn").addEventListener("click", function() {RPSoutcome("scissor", 3)});



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

