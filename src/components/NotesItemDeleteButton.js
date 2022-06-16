import React from "react";

const NotesItemDeleteButton = ({ id, onDelete }) => {
	return <button className="contact-item__delete" onClick={() => onDelete(id)}>Delete</button>
}

export default NotesItemDeleteButton