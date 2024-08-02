function showText() {
    // Get the link and text elements
    var moreButton = document.getElementById('more');
    var expandText = document.getElementById('text');
    
    // Show the text and hide the link
    expandText.style.display = 'inline'; // Show the hidden text
    moreButton.style.display = 'none';   // Hide the link
}
