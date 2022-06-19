import React from "react";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";

const NotesLists = ({ notes, onDelete }) => {
	return (
		<div className="notes-lists">

			<NotesActiveList notes={notes} onDelete={onDelete}  />
			{/* <NotesArchiveList /> */}
		</div>
		
	)
}

export default NotesLists