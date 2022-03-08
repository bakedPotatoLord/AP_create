
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
		noteOutput.innerHTML = '<h1>no notes yet.</h1>'
	}
}

window.onload = function(){
	//notes = JSON.parse(document.cookie)
	window.setInterval(displayNotes,500)
}

class Note{
    constructor(word){

        this.note = word
		  this.date = new Date()

    }

	 generateHTML(){

		 return `
		 <div class='notes'>
		 	<a>${this.date.getMonth()}/${this.date.getDate()}, ${this.date.getHours()}:${this.date.getSeconds()}</a>
			<a>${this.note}<a>
		 </div>
		 `
	 }
}

