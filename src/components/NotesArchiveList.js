import React from "react";
import NotesItem from "./NotesItem";

const NotesArchiveList = ({ notes, onDelete, onArchive}) => {
	return (
		<div className="notes-list">
			<h2>Archived Notes</h2>
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

export default NotesArchiveList