function solve(word, text){
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();

    const found = lowerCaseText.includes(lowerCaseWord);
    if(found){
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
    
}

solve('dkkd', 'JavaScript is the best programming language');