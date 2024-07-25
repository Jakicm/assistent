// script.js

document.addEventListener('DOMContentLoaded', loadNotes);

function addNote() {
    var noteText = document.getElementById('noteInput').value;

    if (noteText.trim() === '') {
        alert('Please enter a valid note.');
        return;
    }

    var noteList = document.getElementById('noteList');

    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    var dateSpan = document.createElement('span');
    dateSpan.className = 'text-muted mr-2';
    dateSpan.textContent = getFormattedDate();

    var noteContent = document.createElement('span');
    noteContent.textContent = noteText;

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right';
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function () {
        listItem.remove();
        saveNotes();
    });

    listItem.appendChild(dateSpan);
    listItem.appendChild(noteContent);
    listItem.appendChild(deleteBtn);

    noteList.appendChild(listItem);

    document.getElementById('noteInput').value = '';

    saveNotes();
}

function saveNotes() {
    var notes = [];
    var noteList = document.getElementById('noteList').children;

    for (var i = 0; i < noteList.length; i++) {
        var dateText = noteList[i].getElementsByTagName('span')[0].textContent;
        var noteText = noteList[i].getElementsByTagName('span')[1].textContent;
        notes.push({ date: dateText, text: noteText });
    }

    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    var notesArray = JSON.parse(localStorage.getItem('notes')) || [];
    var noteList = document.getElementById('noteList');

    noteList.innerHTML = ''; // Clear the note list

    notesArray.forEach(function (note) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        var dateSpan = document.createElement('span');
        dateSpan.className = 'text-muted mr-2';
        dateSpan.textContent = note.date;

        var noteContent = document.createElement('span');
        noteContent.textContent = note.text;

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right';
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', function () {
            listItem.remove();
            saveNotes();
        });

        listItem.appendChild(dateSpan);
        listItem.appendChild(noteContent);
        listItem.appendChild(deleteBtn);

        noteList.appendChild(listItem);
    });
}

function getFormattedDate() {
    var now = new Date();
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}
