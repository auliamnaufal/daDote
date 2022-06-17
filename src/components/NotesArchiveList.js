import React from "react";
import NotesItem from "./NotesItem";

const NotesArchiveList = () => {
	return (
		<div className="notes-list">
			<h2>Archived Notes</h2>
			<NotesItem title={"Coba"} body={"COBALAGI"} createdAt={"Kamis, 14 April 2022"} />
			<NotesItem title={"Coba"} body={"COBALAGI"} createdAt={"Kamis, 14 April 2022"} />
		</div>
		
	)
}

export default NotesArchiveList