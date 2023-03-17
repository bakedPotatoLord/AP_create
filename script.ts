
let noteInput = <HTMLElement>document.querySelector('.left textarea')

let noteOutput = <HTMLElement>document.querySelector('.notes')

var notes:Note[] = []
var notesString = ''

function addNote(note:string){
	//checks if note is not empty
	if(note != ''){
		//if true, add new note to the array and display it
		notes.push( new Note(note))
		displayNotes()
	}else{
		//otherwise, alert the error
		alert('Note must contain at least one character')
	}
}

function displayNotes(){
	//checks if notes array is not empty
	if(notes.length != 0){
		//sets the string that will be displayed to empty
		let notesString = ''
		//adds the styleable code of all notes to the string
		for(let i of notes){
			notesString += i.generateHTML()
		}
		//sets the output innerHTML to the string
		noteOutput.innerHTML = notesString
	}else{
		noteOutput.innerHTML = '<h3>No notes yet.</h3>'
	}
}

function deleteNote(id:number){
	//iterate through list
	notes.splice(
		notes.findIndex((el)=>el.id == id),
		1
	)
	displayNotes()
}

window.onload = function(){
	displayNotes()
	//notes = JSON.parse(document.cookie)
	//window.setInterval(displayNotes,500)
}

class Note{
	note:string
	date: Date
	id:number
	constructor(note:string){
	//constructs note
	this.note = note
	this.date = new Date()
	this.id = Date.now()
	}
	//a method that all Note objects have
	generateHTML(){
	//returns note in stylable HTML form
		return `
		<div class='note'>
		<div class='text'>
			<a>${this.date.getMonth()}/${this.date.getDate()}, ${this.date.getHours()}:
			${this.date.getMinutes()}</a><br>
			<a>${this.note}<a>
		</div>
		<button onclick="deleteNote(${this.id})">Delete Note</button>
		</div>
		`
	}
}

