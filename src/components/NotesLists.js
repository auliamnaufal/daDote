import React from "react";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";

const NotesLists = ({ notes, onDelete, listOptions, onArchive, searchValue }) => {
	let activeNotes = notes.filter((note) => note.archived === false).filter((note) => note.title.toLowerCase().includes(searchValue))
	let archiveNotes = notes.filter((note) => note.archived === true).filter((note) => note.title.toLowerCase().includes(searchValue))

	if (activeNotes.length === 0) {
		activeNotes = notes.filter((note) => note.archived === false)
	}

	if (archiveNotes.length === 0) {
		archiveNotes = notes.filter((note) => note.archived === true)
	}

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