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
					<NotesLists notes={this.state.notes} />
				</div>

			</div>
		)
	}
}

export default NotesApp