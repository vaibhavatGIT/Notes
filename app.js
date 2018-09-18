console.log("Notes Application");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe: 'Title to Note',
	demand: true,
	alias: 't'
}

const argv = yargs
	.command('add', 'add a new note', {
		title: titleOptions,
		body: {
			describe: 'Body of Note',
			demand: true,
			alias: 'b'
		}
	})
	.command('getAll', 'Get All Notes')
	.command('read', 'read note for a specific title', {
		title:titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;

// console.log('process',process.argv);
// console.log('Yargs',argv);

var cmd = process.argv[2];
if (cmd === 'add') {
	var note = notes.addNote(argv.title, argv.body);

	if (note) {
		console.log("Note Created");
		console.log("--------");
		console.log(`Title:${note.title}`);
		console.log(`Body :${note.body}`);
	}
	else {
		console.log('title is already taken');
	}
} else if (cmd === 'getAll') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} notes`)
	allNotes.forEach((note) => {
		console.log("--------");
		console.log(`Title:${note.title}`);
		console.log(`Body :${note.body}`);
	});
} else if (cmd === 'remove') {
	var flag = notes.removeNote(argv.title);
	console.log(flag ? `Note with title ${argv.title} removed sucussfully` : "title not found")
}
else if (cmd === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log("Note Found");
		console.log("--------");
		console.log(`Title:${note.title}`);
		console.log(`Body :${note.body}`);
	}
	else {
		console.log('Note not found');
	}
}
else {
	console.log('Command not recognised');
}
