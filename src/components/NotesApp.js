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
			selectedOptions: "active"
		}

		this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this)
		this.onNoteDeleteEventHandler = this.onNoteDeleteEventHandler.bind(this)
		this.onValueChange = this.onValueChange.bind(this);
		this.onNoteArchiveEventHander = this.onNoteArchiveEventHander.bind(this);

	}

	onValueChange(event) {
    this.setState({
      selectedOptions: event.target.value
    });
		console.log(this.state)
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

	onNoteArchiveEventHander(id) {
		const array = [...this.state.notes]
		let targetIndex = array.findIndex((item) => item.id === id)
		array[targetIndex].archived = !array[targetIndex].archived
		this.setState({ array })
		console.log(this.state)
	}

	render() {
		return (
			<div className="notes-app">
				<NotesNavbar />
				<div className="notes-body">
					<NotesInput addNotes={this.onAddNoteEventHandler} changeOptions={this.onValueChange} />
					<NotesLists notes={this.state.notes} onDelete={this.onNoteDeleteEventHandler} listOptions={this.state.selectedOptions} onArchive={this.onNoteArchiveEventHander} />
				</div>

			</div>
		)
	}
}

export default NotesApp