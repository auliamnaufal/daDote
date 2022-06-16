import React from "react";

const NotesItemBody = ({ title, body, createdAt, dateFormatter }) => {
	return (
		<div className="notes-item">
			<h3>{title}</h3>
			<p className="notes-item__body">{body}</p>
			<p className="notes-item__createdAt">{dateFormatter(createdAt)}</p>
		</div>
	)
}

export default NotesItemBody