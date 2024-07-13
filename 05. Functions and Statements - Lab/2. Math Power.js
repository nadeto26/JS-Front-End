function solve(num, times){
let result= num; 
    for(let i=1; i<times; i++){
    result *=num;
    }

    console.log(result);
}
solve(3,4);