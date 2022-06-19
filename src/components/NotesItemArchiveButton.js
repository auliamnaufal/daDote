import React from "react";

const NotesItemArchiveButton = ({ id, onArchive, archived }) => {
	return <button className="notes-item__button archive" onClick={() => onArchive(id)}>{archived ? "Activate" : "Archived"}</button>
}

export default NotesItemArchiveButton