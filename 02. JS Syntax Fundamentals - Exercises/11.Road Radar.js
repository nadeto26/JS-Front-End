function solve(speed,motorways){
switch(motorways){

    
    case "motorway":
        if(speed>130){
            let difference = speed - 130;
            let status;
            if(difference<=20){
             status= "speeding";
            }
            else if(difference<=40){
                status = "excessive speeding";
            }
            else{
                status = "reckless driving";
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a 130 zone`)
        }
        break;
        case "interstate":
        if(speed>90){
            let difference = speed - 90;
            let status;
            if(difference<=20){
             status= "speeding";
            }
            else if(difference<=40){
                status = "excessive speeding";
            }
            else{
                status = "reckless driving";
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a 90 zone`)
        }
        break;
        case "city":
            if(speed>50){
                let difference = speed - 50;
                let status;
                if(difference<=20){
                 status= "speeding";
                }
                else if(difference<=40){
                    status = "excessive speeding";
                }
                else{
                    status = "reckless driving";
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`)
            }

            else{
                console.log(`Driving ${speed} km/h in a 50 zone`)
            }
            break;
            case "residential":
                if(speed>20){
                    let difference = speed - 20;
                    let status;
                    if(difference<=20){
                     status= "speeding";
                    }
                    else if(difference<=40){
                        status = "excessive speeding";
                    }
                    else{
                        status = "reckless driving";
                    }
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`)
                }
                else{
                    console.log(`Driving ${speed} km/h in a 20 zone`)
                }
                break;     
}
 
}

solve(40, 'city');