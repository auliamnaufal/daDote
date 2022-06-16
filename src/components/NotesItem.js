import React from "react";
import NotesItemBody from "./NotesItemBody";

const NotesItem = ({ title, body, createdAt, dateFormatter }) => {
	return (
		<div className="notes-item">
			<NotesItemBody title={title} body={body} formattedCreatedAt={dateFormatter(createdAt)} />
			
		</div>
	)
}

export default NotesItem