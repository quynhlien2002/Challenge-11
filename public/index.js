var noteTitle = $('.note-title').val();
var noteHistory = $('.history');
var noteTask = $('.note-task');
var saveButton = $('.save');



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

saveButton.on('click', function() {
    console.log(noteTitle);
})