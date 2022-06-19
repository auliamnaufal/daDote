import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesItemArchiveButton from "./NotesItemArchiveButton";
import NotesItemDeleteButton from "./NotesItemDeleteButton";
import { showFormattedDate } from "../utils/index"

const NotesItem = ({ id, title, body, archived, createdAt, onDelete, onArchive }) => {
	return (
		<div className="notes-item">
			<NotesItemBody title={title} body={body} createdAt={showFormattedDate(createdAt)} />
			<div className="notes-item__actions">
				<NotesItemDeleteButton id={id} onDelete={onDelete} />
				<NotesItemArchiveButton archived={archived} id={id} onArchive={onArchive} />
			</div>

		</div>
	)
}

export default NotesItem