
let noteInput = document.querySelector('.left textarea')

let noteOutput = document.querySelector('.notes')

var notes = []
var notesString

function addNote(note){
 notes.push( new Note(note))
 displayNotes()
 //document.cookie = JSON.stringify(notes)
}

function displayNotes(){
	if(notes.length != 0){
		notesString = ''
		for(i of notes){
			notesString += i.generateHTML()
		}
		noteOutput.innerHTML = notesString
	}else{
		noteOutput.innerHTML = '<h3>no notes yet.</h3>'
	}
}

function deleteNote(id){
	//iterate through list
	for(i in notes){
		//if id matches, splice the note
		if(notes[i].id == id){
			notes.splice(i,1)
			break
		}
	}
	displayNotes()
}

window.onload = function(){
	//notes = JSON.parse(document.cookie)
	//window.setInterval(displayNotes,500)
}

class Note{
    constructor(word){

        this.note = word
		this.date = new Date()
		this.id = Date.now()

    }

	 generateHTML(){

		 return `
		 <div class='note'>
		 	<a>${this.date.getMonth()}/${this.date.getDate()}, ${this.date.getHours()}:${this.date.getMinutes()}</a>
			<a>${this.note}<a>
			<button onclick="deleteNote(${this.id})">Delete Note</button>
		 </div>
		 `
	 }
}

