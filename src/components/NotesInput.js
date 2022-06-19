import React from "react";

class NotesInput extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "",
			body: "",
		}

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
	}

	onTitleChangeEventHandler(e) {
		this.setState((prevState) => {
			return {
				...prevState,
				title: e.target.value
			}
		})
	}

	onBodyChangeEventHandler(e) {
		this.setState((prevState) => {
			return {
				...prevState,
				body: e.target.value
			}
		})
	}

	onSubmitEventHandler(e) {
		e.preventDefault()
		this.props.addNotes(this.state)
		this.setState(() => {
			return {
				title: "",
				body: "",
			}
		})
	}

	render() {
		return (
			<div className="notes-input">
				<div className="notes-input__body">
					<h1>Add Notes</h1>
					<form className="notes-input__form" onSubmit={this.onSubmitEventHandler}>
						<div>
							<label htmlFor="title">Title</label>
							<input type="text" placeholder="Your notes title..." name="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
						</div>
						<div>
							<label htmlFor="notes">Notes</label>
							<textarea type="text" placeholder="Type your notes here" name="notes" rows={10} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
						</div>
						<input type="submit" value="Add Note" />
					</form>

					<div className="notes-input__display">
						<input type="radio" name="show-list" id="active" />
						<label htmlFor="active">Active</label>
						<input type="radio" name="show-list" id="archive" />
						<label htmlFor="archive">Archive</label>
					</div>
				</div>
			</div>
		)
	}
}

export default NotesInput