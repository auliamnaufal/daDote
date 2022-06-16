import React from "react";

class NotesInput extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "",
			body: "",
		}
	}

	render() {
		return (
			<form className="notes-input">
				<input type="text" placeholder="Your notes title..." />
				<textarea type="text" placeholder="Type your notes here" />
				<input type="submit" value="Add Note" />
			</form>
		)
	}
}

export default NotesInput