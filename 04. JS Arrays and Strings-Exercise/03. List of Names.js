function solve(names){

    //compare function --ASCII 
names.sort((a,b)=> a.localeCompare(b))
.forEach((name,index) => {
    console.log(`${index + 1}.${name}`);
});;

}

solve(["John", "bob", "Christina", "Ema"]);