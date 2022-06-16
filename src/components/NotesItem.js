import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesItemArchiveButton from "./NotesItemArchiveButton";
import NotesItemDeleteButton from "./NotesItemDeleteButton";

const NotesItem = ({ title, body, createdAt, dateFormatter }) => {
	return (
		<div className="notes-item">
			<NotesItemBody title={title} body={body} formattedCreatedAt={() => dateFormatter(createdAt)} />
			<div className="notes-item__actions">
				<NotesItemDeleteButton />
				<NotesItemArchiveButton />
			</div>

		</div>
	)
}

export default NotesItem