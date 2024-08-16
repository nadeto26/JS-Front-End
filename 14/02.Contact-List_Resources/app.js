window.addEventListener("load", solve);

function solve() {
  // Get add button element
  let addButton = document.getElementById('add-btn');

  // Get ul list element
  let checkList = document.getElementById('check-list');

  let nameElement = document.getElementById('name');
  let phoneElement = document.getElementById('phone');
  let categoryElement = document.getElementById('category');

  const contactList =  document.getElementById('contact-list');

  // Attach add event
  addButton.addEventListener('click', () => {
      // Get input data
      let name = nameElement.value;
      let phone = phoneElement.value;
      let category = categoryElement.value;

      // Create checklist elements
      const liElement = createCheckListElement(name, phone, category);
      
      // Add element to checklist
      checkList.appendChild(liElement);
      // Clear inputs
      clearInputs();
  });

  function clearInputs() {
      nameElement.value = '';
      phoneElement.value = '';
      categoryElement.value = '';
  }

  function createCheckListElement(name, phone, category) {
      const pNameElement = document.createElement('p');
      pNameElement.textContent = `name: ${name}`;

      const pPhoneElement = document.createElement('p');
      pPhoneElement.textContent = `phone: ${phone}`;

      const pCategoryElement = document.createElement('p');
      pCategoryElement.textContent = `category: ${category}`;

      const articleElement = document.createElement('article');
      articleElement.appendChild(pNameElement);
      articleElement.appendChild(pPhoneElement);
      articleElement.appendChild(pCategoryElement);

      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.textContent = 'Edit';

      const saveButton = document.createElement('button');
      saveButton.classList.add('save-btn');
      saveButton.textContent = 'Save';

      const divButtons = document.createElement('div');
      divButtons.classList.add('buttons');
      divButtons.appendChild(editButton);
      divButtons.appendChild(saveButton);

      const liElement = document.createElement('li');
      liElement.appendChild(articleElement);
      liElement.appendChild(divButtons);

      // Edit functionality
      editButton.addEventListener('click', () => {
          // Set inputs
          nameElement.value = name;
          phoneElement.value = phone;
          categoryElement.value = category;

          // Remove from checklist
          liElement.remove();
      });

      // Save functionality
      saveButton.addEventListener('click', () => {
          // Remove edit and save buttons
          divButtons.remove();

          // Create delete button
          const deleteBtn = document.createElement('button');
          deleteBtn.classList.add('del-btn');
          deleteBtn.textContent = 'Delete';

          // Add delete button to the li
          liElement.appendChild(deleteBtn);

          // Move to contact list
          contactList.appendChild(liElement);

          // Delete functionality
          deleteBtn.addEventListener('click', () => {
              liElement.remove();
          });
      });

      return liElement;
  }
}
