import React from "react";

class NotesInput extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "",
			body: "",
			titleLength: 50,
		}

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
		this.onValueChange = this.onValueChange.bind(this);
	}

	onValueChange(event) {
    this.props.changeOptions(event)
  }

	onTitleChangeEventHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				title: event.target.value,
				titleLength: 50 - event.target.value.length
			}
		})
	}

	onBodyChangeEventHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				body: event.target.value
			}
		})
	}

	onSubmitEventHandler(event) {
		event.preventDefault()
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
							<p className="title-length">Character left: {this.state.titleLength} </p>
							<input type="text" placeholder="Your notes title..." name="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={50} />
						</div>
						<div>
							<label htmlFor="notes">Notes</label>
							<textarea type="text" placeholder="Type your notes here" name="notes" rows={10} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
						</div>
						<input type="submit" value="Add Note" />
					</form>

					<div className="notes-input__display">
						<input type="radio" name="show-list" id="active" value={"active"} onChange={this.onValueChange} defaultChecked />
						<label htmlFor="active">Active</label>
						<input type="radio" name="show-list" id="archive" value={"archive"} onChange={this.onValueChange} />
						<label htmlFor="archive">Archive</label>
					</div>
				</div>
			</div>
		)
	}
}

export default NotesInput