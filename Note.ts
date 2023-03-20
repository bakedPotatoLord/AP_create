
export default class Note{
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