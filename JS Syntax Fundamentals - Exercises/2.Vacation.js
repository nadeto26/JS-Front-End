function solve(numberOfPeople, typeOfPeople, dayOfWeek){
    let totalPrice;
    switch(typeOfPeople){
    case "Students":
        if(dayOfWeek == "Friday"){
            totalPrice = numberOfPeople * 8.45;
            if(numberOfPeople>=30){
                totalPrice *= 0.85;
            }
        }
        else if(dayOfWeek == "Saturday"){
            totalPrice = numberOfPeople * 9.80;
            if(numberOfPeople>=30){
                totalPrice *= 0.85;
            }
        }

        else if(dayOfWeek == "Sunday"){
            totalPrice = numberOfPeople * 10.46;
            if(numberOfPeople>=30){
                totalPrice *= 0.85;
            }
        }
        
        break;

        case "Business":
            if(dayOfWeek == "Friday"){
                totalPrice = numberOfPeople * 10.90;
                if(numberOfPeople>=100){
                    totalPrice = totalPrice - 10*10.90;
                }
            }
            else if(dayOfWeek == "Saturday"){
                totalPrice = numberOfPeople * 15.60;
                if(numberOfPeople>=100){
                    totalPrice = totalPrice - 10*15.60;
                }
            }
    
            else if(dayOfWeek == "Sunday"){
                totalPrice = numberOfPeople * 16;
                if(numberOfPeople>=100){
                    totalPrice = totalPrice - 10*16;
                }
            }
            
            break;

            case "Regular":
                if(dayOfWeek == "Friday"){
                    totalPrice = numberOfPeople * 15;
                    if(numberOfPeople>=10 && numberOfPeople<=20){
                        totalPrice *= 0.95;
                    }
                }
                else if(dayOfWeek == "Saturday"){
                    totalPrice = numberOfPeople * 20;
                    if(numberOfPeople>=10 && numberOfPeople<=20){
                        totalPrice *= 0.95;
                    }
                }
        
                else if(dayOfWeek == "Sunday"){
                    totalPrice = numberOfPeople * 22.50;
                    if(numberOfPeople>=10 && numberOfPeople<=20){
                        totalPrice *= 0.95;
                    }
                }
                
                break;
    }

     

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40, "Regular", "Saturday")