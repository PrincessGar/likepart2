var count=0;
var countElement = document.querySelector("#count")

console.log(countElement)

function add1(){
    count++
    countElement.innerText = "like(s)"+count
    console.log(countElement);

}