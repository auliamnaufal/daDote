import React from "react";
import NotesItem from "./NotesItem";

const NotesActiveList = ({ notes, onDelete, onArchive }) => {
	return (
		<div className="notes-list">
			<h2>Active Notes</h2>
			<div className="notes-list-item">
				{
					notes.length !== 0 ?
					notes.map((note) => (
						<NotesItem {...note} key={note.id} onDelete={onDelete} onArchive={onArchive} />
				)) :
					<p>No notes found</p>
				}
			</div>
		</div>
		
	)
}

export default NotesActiveList