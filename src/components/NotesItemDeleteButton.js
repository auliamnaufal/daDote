import React from "react";

const NotesItemDeleteButton = ({ id, onDelete }) => {
	return <button className="notes-item__button delete" onClick={() => onDelete(id)}>Delete</button>
}

export default NotesItemDeleteButton