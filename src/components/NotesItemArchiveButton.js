import React from "react";

const NotesItemArchiveButton = ({ id, onArchive }) => {
	return <button className="notes-item__button archive" onClick={() => onArchive(id)}>Archive</button>
}

export default NotesItemArchiveButton