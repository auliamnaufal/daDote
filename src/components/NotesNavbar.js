import React from "react";

const NotesNavbar = ({ searchValue, onSearchValueChangeEventHandler }) => {
	return (
		<div className="notes-navbar">
			<h2>daNote</h2>
			<input type="text" placeholder="Type here to search notes" value={searchValue} onChange={onSearchValueChangeEventHandler} />

		</div>
	)
}

export default NotesNavbar