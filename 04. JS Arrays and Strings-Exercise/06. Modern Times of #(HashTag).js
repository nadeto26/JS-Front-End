function solve(text) {
    let regex = /#[a-zA-Z]+/g;
    let matches = text.match(regex);
    
    let wordsWithoutHash = matches.map(word => word.replace('#', ''));
    console.log(wordsWithoutHash.join('\n'));
}

solve('The symbol #IS is known #variously in English-speaking #regions as the #number sign');
