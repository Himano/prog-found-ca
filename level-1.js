//question 1
var myName = "Gunnar";

//question 2
var person = {
  gender: "male",
  age: 50
};

//question 3
var outOfStock = false;
if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

//question 4
var numberArray = [2, 5, 8, 10, 11];

for (var i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

//question 5

for (var counter = 15; counter < 26; counter++) {
  console.log(counter);
}

//question 6
for (var counter = 15; counter < 26; counter++) {
  if (counter === 20) {
    console.log(20);
  }
}
//question 7

var itemForSale = [
  {
    name: "hammer",
    price: 35,
    inStock: true
  },

  {
    name: "saw",
    price: 40,
    inStock: false
  }
];

for (var i = 0; i < itemForSale.length; i++) {
  console.log(itemForSale[i].price);
  console.log(itemForSale[i].inStock);
}

//question 8
function whatIDontLike(notLiked) {
  console.log("I don't like " + notLiked);
}

whatIDontLike("boiled eggs");

//question 9
function subtractNumber(firstNumber, secondNumber) {
  console.log(firstNumber - secondNumber);
}

subtractNumber(30, 15);

//question 10
var colorArray = [];

function addToColorArray(addColor) {
  colorArray.push(addColor);
}

addToColorArray("red");
