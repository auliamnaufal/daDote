import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index"
import NotesNavbar from "./NotesNavbar";
import NotesInput from "./NotesInput";
import NotesLists from "./NotesLists";

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

				<div className="notes-body">
					<NotesInput />
					<NotesLists />
				</div>

			</div>
		)
	}
}

export default NotesApp