function extractText() {
    // Select the unordered list
    var list = document.getElementById('items');
    
    // Get all list items
    var listItems = list.getElementsByTagName('li');
    
    // Select the textarea
    var textarea = document.getElementById('result');
    
    // Initialize an empty array to collect text
    var textArray = [];
    
    // Loop through all list items and collect their text
    for (var i = 0; i < listItems.length; i++) {
        textArray.push(listItems[i].textContent);
    }
    
    // Join the array into a single string separated by new lines
    var textToDisplay = textArray.join('\n');
    
    // Set the text of the textarea
    textarea.value = textToDisplay;
}


//another solution
function extractText(){
const ulElement = document.getElementById('items');

var textarea = document.getElementById('result');

const textResult = ulElement.innerText;

textarea.textContent = textResult; // here we set the textArea = textResult with textContent

}

//textContent - get and set the text content of an html 
