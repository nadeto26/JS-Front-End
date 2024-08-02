function colorize() {
   
    var table = document.querySelector('table tbody');

    var tableRowElements = table.children;

    for(let i=1; i< tableRowElements.length;i+=2){
        tableRowElements[i].style.backgroundColor = "Teal";
    }
}