import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index"
import NotesNavbar from "./NotesNavbar";
import NotesInput from "./NotesInput";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";

class NotesApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: getInitialData(),
		}
	}

	render() {
		return (
			<div className="notes-app">
				<NotesNavbar />
				<h1>Add Notes</h1>

				<NotesInput />

				<NotesActiveList />
				<NotesArchiveList />

			</div>
		)
	}
}

export default NotesApp