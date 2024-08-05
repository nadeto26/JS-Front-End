function addItem() {

    //get el references ul and input
     const itemsEl = document.getElementById("items");
     const inputEl = document.getElementById("newItemText");

     //read the input
     const itemText = inputEl.value;

     //create li element for the ul
     const liEl = document.createElement('li');

     //Add text content to li elemenent 
     liEl.textContent = itemText;

     //apend li element to the ul
     itemsEl.appendChild(liEl);

    //clear the input value
    inputEl.value = '';


}