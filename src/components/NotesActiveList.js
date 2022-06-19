import React from "react";
import NotesItem from "./NotesItem";

const NotesActiveList = ({ notes }) => {
	return (
		<div className="notes-list">
			<h2>Active Notes</h2>
			<div className="notes-list-item">
				{
					notes.map((note) => (
						<NotesItem {...note} key={note.id} />
				))
				}
			</div>
		</div>
		
	)
}

export default NotesActiveList