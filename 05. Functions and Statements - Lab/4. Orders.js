function solve(product, quantity){
let totalSum;
if(product=='coffee'){
    totalSum = 1.50*quantity;
}
else if(product == 'water'){
    totalSum = 1.00 * quantity;
}
else if(product == 'coke'){
    totalSum = 1.40*quantity;
}
else if(product == 'snacks'){
    totalSum = 2.00 * quantity;
}

console.log(totalSum.toFixed(2));
}

solve("water", 5);