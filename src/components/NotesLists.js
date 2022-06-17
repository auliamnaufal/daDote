import React from "react";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";

const NotesLists = () => {
	return (
		<div className="notes-lists">
			<input type="text" placeholder="Type here to search notes" />

			<NotesActiveList />
			{/* <NotesArchiveList /> */}
		</div>
		
	)
}

export default NotesLists