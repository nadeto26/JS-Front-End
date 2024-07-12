function solve(input) {
    // Using a regular expression to split the PascalCase string into words
    let words = input.split(/(?=[A-Z])/);
    
    // Joining the words with comma and space
    let result = words.join(', ');
    
    // Printing the result
    console.log(result);
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');