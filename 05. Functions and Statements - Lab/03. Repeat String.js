function solve(word, times){
result = word;
    for(let i= 1;i< times; i++){
    result+=word;
    }

    console.log(result);
}

solve("String", 2);