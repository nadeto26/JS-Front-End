function solve(commands) {
    const database = [];

    commands.forEach(command => {
        if (command.startsWith("addMovie")) {
            
            const name = command.replace("addMovie", "").trim();
            database.push({ name });
        } else if (command.includes("directedBy")) {
            
            const [name, director] = command.split("directedBy").map(part => part.trim());
        
            const movie = database.find(movie => movie.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if(command.includes("onDate")) { // Отделен else if блок за onDate
            const [name, date] = command.split("onDate").map(part => part.trim());
            const movie = database.find((x) => x.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    });

    
    database.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

 
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Joss Whedon',
    'Superman directedBy Zack Snyder',
    'addMovie The Dark Knight',
    'The Dark Knight directedBy Christopher Nolan',
    'The Dark Knight onDate 2008-07-18',
    'Superman onDate 2013-06-14'
]);


    
