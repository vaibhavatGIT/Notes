// var obj ={
//     name:"vaibhav"
// };

// var stringObj =JSON.stringify(obj)

// console.log(stringObj);

var fs=require('fs');

var orignalNote={
    title:'Title here',
    body:'Some Body'
}; 
var orignalNoteString=JSON.stringify(orignalNote);
fs.writeFileSync('notes.json',orignalNoteString);


var noteString = fs.readFileSync('notes.json');
var note= JSON.parse(noteString);
console.log(note.title);