console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {

  var notes = [];
  var note = {
    title,
    body
  };
  
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    
  }
  var duplicateNotes = notes.filter((note) => note.title === title);
  
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  };

};

var getAll = () => {
  var noteList = fs.readFileSync('notes-data.json');
  var noteListArray = JSON.parse(noteList);
  console.log(noteListArray);
  
  for (note in noteListArray) {
    console.log(note.title, note.body);
  }

};

var getNote = (title) => {
  console.log('Getting note: ', title);
};

var removeNote = (title) => {
  console.log('Removing note: ', title);
};

module.exports = {
  //In ES6, this is equivalent to addNote: addNote if property and variable have the same name.
  addNote,
  getAll,
  getNote,
  removeNote
};
