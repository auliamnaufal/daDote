import React from "react";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";

const NotesLists = ({ notes, onDelete, listOptions, onArchive }) => {
	const activeNotes = notes.filter((note) => note.archived === false)
	const archiveNotes = notes.filter((note) => note.archived === true)

	return (
		<div className="notes-lists">

			{
				listOptions === "active" ? 
					<NotesActiveList notes={activeNotes} onDelete={onDelete} onArchive={onArchive}  /> :
					<NotesArchiveList notes={archiveNotes} onDelete={onDelete} onArchive={onArchive}  />
			}

		</div>
		
	)
}

export default NotesLists