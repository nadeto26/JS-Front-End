function deleteByEmail() {
    // Get input and table references
    const customerTableElement = document.getElementById('customers');
    const inputElement = document.querySelector('input[type=text][name=email]');
    const resultElement = document.getElementById('result');

    // Get input text value
    const searchEmail = inputElement.value;

    // Get all table rows
    const tableRowElements = customerTableElement.querySelectorAll('tbody td:last-child');

    // Convert NodeList to array and search for email
    const searchForEmail = Array.from(tableRowElements).find(el => el.textContent === searchEmail);

    // Remove the row if email is found
    if (searchForEmail) {
        searchForEmail.parentElement.remove();
        resultElement.textContent = "Deleted.";
    } else {
        resultElement.textContent = "Not found.";
    }
}
