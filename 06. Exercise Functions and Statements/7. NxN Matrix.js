function printMatrix(num){
const getNumberNTimes = (number, separator= " ")=>{
return `${number}${separator}`.repeat(number).trim();
};
    for(let i=1; i<=num; i++){
        console.log(getNumberNTimes(num));
    }
}
printMatrix(3);