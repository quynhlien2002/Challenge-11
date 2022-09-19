const noteTitle = document.getElementById('note-title');
const noteHistory = document.getElementById('history');
const noteTask = document.getElementById('note-task');
const saveButton = document.getElementById('save');


const getNote = () => {
    fetch('/api/notes', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
        console.error('Error:', error);
    });
}

// const postNote = ();

const createNote = () => {
    const titleInput = noteTitle.value(); 
    const historyInput = history.value();
    var titleStorage = localStorage.setItem('titleInput', titleInput);
    var historyStorage = localStorage.setItem('historyStorage', historyInput);

    titleStorage = localStorage.getItem('titleInput');
    historyStorage = localStorage.getItem('storageInput');

    titleStorage.append(noteHistory);

};

saveButton.addEventListener('click', createNote);