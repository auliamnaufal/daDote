import React from "react";
import NotesItemBody from "./NotesItemBody";

const NotesItem = ({ title, body, createdAt, dateFormatter }) => {
	return (
		<div className="notes-item">
			<NotesItemBody />
		</div>
	)
}

export default NotesItem