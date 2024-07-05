function solve(sentence, word) {
    let count = 0;
    let regex = new RegExp(`\\b${word}\\b`, 'g');
    let matches = sentence.match(regex);

    if (matches) {
        count = matches.length;
    }

    console.log(count);
}

solve('This is a word and it also is a sentence','is');