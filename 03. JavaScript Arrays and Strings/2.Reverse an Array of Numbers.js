function solve(num, nums){
let numbers = nums.slice(0,num).reverse();
console.log(numbers.join(' '));
}

solve(4, [-1, 20, 99, 5]);