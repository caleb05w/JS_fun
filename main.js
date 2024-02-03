/* JS Practice */


function disappear() {
document.getElementById("changer").style.cssText=`
font-size: 40px;
color: red;
border: 3px solid white;
transition: 0.25s ease-in-out;
`
document.getElementById("changer").innerHTML = "Paragraph changed"
alert("good job");
}

console.log("Startiiiiiiiiiiiiiiiiiiiiing");