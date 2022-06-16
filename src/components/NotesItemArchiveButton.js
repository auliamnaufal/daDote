import React from "react";

const NotesItemArchiveButton = ({ id, onArchive }) => {
	return <button className="contact-item__archive" onClick={() => onArchive(id)}>Archive</button>
}

export default NotesItemArchiveButton