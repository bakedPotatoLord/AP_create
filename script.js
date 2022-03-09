
let noteInput = document.querySelector('.left textarea')

let noteOutput = document.querySelector('.notes')

var notes = []
var notesString = ''

function addNote(note){
	if(note != ''){
		notes.push( new Note(note))
		displayNotes()
		//document.cookie = JSON.stringify(notes)
	}else{
		alert('Note must contain at least one character')
	}
}

function displayNotes(){
	if(notes.length != 0){
		notesString = ''
		for(i of notes){
			notesString += i.generateHTML()
		}
		noteOutput.innerHTML = notesString
	}else{
		noteOutput.innerHTML = '<h3>No notes yet.</h3>'
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
	displayNotes()
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
		 	<div class='text'>
				<a>${this.date.getMonth()}/${this.date.getDate()}, ${this.date.getHours()}:${this.date.getMinutes()}</a><br>
				<a>${this.note}<a>
			</div>
			<button onclick="deleteNote(${this.id})">Delete Note</button>
		 </div>
		 `
	 }
}

