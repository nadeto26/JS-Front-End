const basedUrl = "http://localhost:3030/jsonstore/games/";
// Get elements
const loadButton = document.getElementById('load-games');
const gameList = document.getElementById('games-list');
const addButton = document.getElementById('add-game');
const editButton = document.getElementById('edit-game');
const nameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');
const formElement = document.querySelector('#form form');
 

// Load games
loadButton.addEventListener('click', loadGames);

// Add games
addButton.addEventListener('click', addGame);

// Edit games
editButton.addEventListener('click', editGame);

async function addGame() {
    // Get input data
    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    // Clear inputs
    clearInputs();

    // Create POST request
    await fetch(basedUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, type, players })
    });

    // Fetch all games
    loadGames();
}

function clearInputs() {
    nameInput.value = "";
    playersInput.value = "";
    typeInput.value = "";
}

async function loadGames() {
    // Clear games list
    gameList.innerHTML = '';

    // Get request
    const response = await fetch(basedUrl);
    const result = await response.json();
    const games = Object.values(result);

    // Create game elements -- an array of DOM elements
    const gameElements = games.map(game => createGameElement(game.name, game.type, game.players, game._id));
    console.log(gameElements);

    // Add to game list
    gameList.append(...gameElements);

    // Deactivate edit button (initially)
    editButton.setAttribute('disabled', 'disabled');
}

async function editGame() {
    // Get id from attribute
    const gameId = formElement.getAttribute('data-game-id');

    // Get info from inputs
    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    // Clear inputs
    clearInputs();

    // Send PUT request
    await fetch(`${basedUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, type, players, _id: gameId }),
    });

    // Load all games
    await loadGames();

    // Deactivate edit button
    editButton.setAttribute('disabled', 'disabled');

    // Activate add button
    addButton.removeAttribute('disabled');

    // Clear id
    formElement.removeAttribute('data-game-id');
}

function createGameElement(name, type, players, gameId) {
    const pNameElement = document.createElement('p');
    pNameElement.textContent = name;

    const pTypeElement = document.createElement('p');
    pTypeElement.textContent = type;

    const pMaxPlacesElement = document.createElement('p');
    pMaxPlacesElement.textContent = players;

    const divContentElement = document.createElement('div');
    divContentElement.classList.add('content');
    divContentElement.appendChild(pNameElement);
    divContentElement.appendChild(pTypeElement);
    divContentElement.appendChild(pMaxPlacesElement);

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    changeButton.addEventListener('click', () => {
        // Populate game info into fields
        nameInput.value = name;
        typeInput.value = type;
        playersInput.value = players;

        // Activate edit game button
        editButton.removeAttribute('disabled');
        // Deactivate add button
        addButton.setAttribute('disabled', 'disabled');

        // Set an attribute
        formElement.setAttribute('data-game-id', gameId);
    });

    deleteButton.addEventListener('click', async () => {
        // Send DELETE request
        await fetch(`${basedUrl}/${gameId}`, {
            method: 'DELETE'
        });

        // Reload games
        await loadGames();
    });

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons-container');
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    const gameDivElement = document.createElement('div');
    gameDivElement.classList.add('board-game');
    gameDivElement.appendChild(divContentElement);
    gameDivElement.appendChild(divButtons);

    return gameDivElement; // Връщаме създадения елемент
}
