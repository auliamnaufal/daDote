import React from "react";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";

const NotesLists = ({ notes, onDelete, listOptions, onArchive, searchValue }) => {
	const activeNotes = notes.filter((note) => note.archived === false).filter((note) => note.title.toLowerCase().includes(searchValue))
	const archiveNotes = notes.filter((note) => note.archived === true).filter((note) => note.title.toLowerCase().includes(searchValue))

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