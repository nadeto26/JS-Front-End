function solve(nums){
    let sumEven=0;
    let sumOdd=0;
    let result=0;
for(let i=0; i<nums.length;i++){
    if(nums[i] % 2==0){
    sumEven += nums[i];
    }
    else{
        sumOdd += nums[i];
    }
}

result = sumEven-sumOdd;
console.log(result);
 
}

solve([2,4,6,8,10]);