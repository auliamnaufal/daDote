import React from "react";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";

const NotesLists = ({ notes, onDelete, listOptions }) => {
	return (
		<div className="notes-lists">

			{
				listOptions === "active" ? 
					<NotesActiveList notes={notes} onDelete={onDelete}  /> :
					<NotesArchiveList notes={notes} onDelete={onDelete}  />
			}

		</div>
		
	)
}

export default NotesLists