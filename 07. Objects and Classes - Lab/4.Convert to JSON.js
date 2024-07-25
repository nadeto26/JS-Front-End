function solve(firstName, lastName, hairColor){
    
    let info = {
       name: firstName,
       lastName,
       hairColor,
    };
    let text = JSON.stringify(info);

    console.log(text);

    //add indentation to JSON
   let catJSONWithIndentation = JSON.stringify(text, null, 2);
   console.log(catJSONWithIndentation);
}

solve({"name":"George","lastName":"Jones","hairColor":"Brown"});


 
