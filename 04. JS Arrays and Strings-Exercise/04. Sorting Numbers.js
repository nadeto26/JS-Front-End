function solve(numbers){
const sortedNumbers = numbers.sort((a,b) => a-b);
const result =[];
 
while(sortedNumbers.length >0){
    let firstNumber = sortedNumbers.shift();
    let lastNumber = sortedNumbers.pop();

    result.push(firstNumber, lastNumber);
}

 
return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);