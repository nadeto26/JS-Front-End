function solve(number1, number2, number3)
{
    let result;
    if(number1 > number2 && number1> number3)
        {
             result = number1;
        }
        else if(number2 > number1 && number2 > number3)
            {
                result = number2;
            }
            else if (number3 > number1 && number3> number2)
                {
                    result = number3;
                }


        console.log(`The largest number is ${result}.`);
}