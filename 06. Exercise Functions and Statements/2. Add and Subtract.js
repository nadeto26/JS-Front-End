function addSubstract(num1, num2, num3) {
    let result;
    let sum = num1 + num2;
    result = sum - num3;
    console.log(result);
}
addSubstract(23, 6, 10);


//Arrow function 
function addAndSubstract(firstNum, secondNum, thirdNum) {
    const sumTwoNumbers = (x, y) => x + y;
    const substractNumbers = (x, y) => x - y;

    const firstResult = sumTwoNumbers(firstNum, secondNum);
    const secondResult = substractNumbers(firstResult, thirdNum);
    console.log(secondResult);
}

addAndSubstract(23, 6, 10);