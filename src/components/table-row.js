import React from 'react';

const TableRow = (props) => {
		//props: index, bookObject, readToggler,removeBook
		//create the table row jsx
		// attach remove book button
		let book = props.book;
	return (
		<tr>
			<td> {book.title} </td>
			<td> {book.author} </td>
			<td> {book.pages} </td>
			<td> <button className="not-yet" onClick={function() {props.readToggler(props.index)}}> {book.read? "read" : "not yet"} </button> </td>
			<td> <button className="remove-book btn" onClick={props.removeBook}>remove</button> </td>
		</tr>
	)
}

export default TableRow
