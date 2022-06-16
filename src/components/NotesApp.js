import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index"
import NotesNavbar from "./NotesNavbar";
import NotesInput from "./NotesInput";

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
				{/* Input Field */

				/* Notes */
					/* Active Notes */
					/* Arcivve Notes */
				/**/}

			</div>
		)
	}
}

export default NotesApp