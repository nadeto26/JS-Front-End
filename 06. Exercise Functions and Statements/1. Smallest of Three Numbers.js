function theSmaleestNumber(num1,num2,num3){
    if(num1<num2 && num1<num3){
        console.log(num1);
    }
    else if(num2<num1 && num2<num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

theSmaleestNumber(2,2,2);


//self excuting function
((a,b,c)=>console.log(Math.min(a,b,c)))(2,4,6);