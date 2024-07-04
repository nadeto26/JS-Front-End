function solve(number){
    let sum=0;
    while(number>0){
    sum+= number%10;
    
    number = Math.trunc(number/10);

    }

    console.log(sum);
}

solve(97561);

//solve with strings

function solve(number){
    let textNumber = number.toString();
    let sum=0;

    for(let i=0; i<textNumber.length;i++){
        sum+= Number(textNumber[i]);

        // +(textNumber[i])
    }

    console.log(sum);
}

solve(97561);

 