function solve(wordsInput, template){
    if(wordsInput.length== "*".length){
        console.log(template.replace("*", wordsInput));
    }
 
}

solve('great, learning','softuni is ***** place for ******** new programming languages');