function changeText(){
var textsArray = ["Yellow","Green", "Red", "Blue", "Purple"]
var number = getRandomNum(0,textsArray.length - 1)
console.log("Index: ", number)
document.getElementById("heading").innerHTML = textsArray[number];
}
function getRandomNum(min,max){
return Math.floor(Math.random()*(max-min+1)+min);
}
