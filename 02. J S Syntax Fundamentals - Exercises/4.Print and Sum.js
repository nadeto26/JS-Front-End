function solve(num1, num2) {
    let totalSum = 0;
    let numbers = '';
    for (let i = num1; i <= num2; i++) {
        totalSum += i;
        numbers += i + ' ';
    }
    console.log(numbers.trim()); 
    console.log(`Sum: ${totalSum}`);
}

 
solve(1, 5); 

solve(5,10);
solve(totalSum);