import React from "react";

const NotesItemBody = ({ title, body, createdAt }) => {
	return (
		<div className="notes-item-body">
			<h3>{title}</h3>
			<p className="notes-item-body__createdAt">{createdAt}</p>
			<p className="notes-item-body__body">{body}</p>
		</div>
	)
}

export default NotesItemBody