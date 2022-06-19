import React from "react";
import { getInitialData } from "../utils/index"
import NotesNavbar from "./NotesNavbar";
import NotesInput from "./NotesInput";
import NotesLists from "./NotesLists";

class NotesApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: getInitialData(),
		}

		this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this)
		this.onNoteDeleteEventHandler = this.onNoteDeleteEventHandler.bind(this)
	}

	onNoteDeleteEventHandler(id) {
		const array = [...this.state.notes]
		const targetNote = this.state.notes.findIndex((note) => note.id === id)
		array.splice(targetNote, 1)
		this.setState(() => {
			return {
				notes: array
			}
		})
	}

	onAddNoteEventHandler({ title, body }) {
		this.setState((prevState) => {
			return {
				notes: [
					...prevState.notes,
					{
						id: +new Date(),
						title,
						body,
						createdAt: new Date().toISOString(),
						archived: false
					}
				]
			}
		})
	}

	render() {
		return (
			<div className="notes-app">
				<NotesNavbar />
				<div className="notes-body">
					<NotesInput addNotes={this.onAddNoteEventHandler} />
					<NotesLists notes={this.state.notes} onDelete={this.onNoteDeleteEventHandler} />
				</div>

			</div>
		)
	}
}

export default NotesApp