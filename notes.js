var fs = require('fs');

var fetchNotes = () => {
    try {
        var currentNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(currentNotes);
    } catch (e) {
        return [];
        console.log("ERror in getNoteing file");
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

const getAll = () => {
    return fetchNotes();
}
const getNote = (title) => {
    var notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => note.title === title);

    return duplicateNotes[0];

}

const removeNote = (title) => {
    var notes = fetchNotes();

    var finalNotes = notes.filter((note) => {
        return note.title !== title
    })
    saveNotes(finalNotes);
    return notes.length !== finalNotes.length

}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
} 