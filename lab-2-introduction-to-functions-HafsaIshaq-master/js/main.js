// Enter your code below.
console.log("javascript calculator linked.")

const getElementValue = function(selector) {
let element = document.querySelector(selector);
return element.innerText
};

const multiply = function (firstValue, secondValue) {
  return firstValue * secondValue;
};

const updateResult = function () {
  let firstValue = parseInt(getElementValue("#first-value"));
  let secondValue = parseInt(getElementValue("#second-value"));
  let result = multiply(firstValue, secondValue);
  let updateText = document.querySelector("#result");
  updateText.innerText = result;
};

updateResult();