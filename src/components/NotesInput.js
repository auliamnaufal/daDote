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
			<div className="notes-input">
				<div className="notes-input__body">
					<h1>Add Notes</h1>
					<form className="notes-input__form">
						<div>
							<label htmlFor="title">Title</label>
							<input type="text" placeholder="Your notes title..." name="title" />
						</div>
						<div>
							<label htmlFor="notes">Notes</label>
							<textarea type="text" placeholder="Type your notes here" name="notes" rows={10} />
						</div>
						<input type="submit" value="Add Note" />
					</form>
				</div>
			</div>
		)
	}
}

export default NotesInput