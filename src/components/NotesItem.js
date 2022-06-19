import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesItemArchiveButton from "./NotesItemArchiveButton";
import NotesItemDeleteButton from "./NotesItemDeleteButton";
import { showFormattedDate } from "../utils/index"

const NotesItem = ({ title, body, createdAt }) => {
	return (
		<div className="notes-item">
			<NotesItemBody title={title} body={body} createdAt={showFormattedDate(createdAt)} />
			<div className="notes-item__actions">
				<NotesItemDeleteButton />
				<NotesItemArchiveButton />
			</div>

		</div>
	)
}

export default NotesItem