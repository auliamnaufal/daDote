import React from "react";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";

const NotesLists = () => {
	return (
		<div className="notes-lists">

			<NotesActiveList />
			{/* <NotesArchiveList /> */}
		</div>
		
	)
}

export default NotesLists