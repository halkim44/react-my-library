import React from 'react';
import './bookTable.css';
import TableRow from './table-row';

//import table-row

class BookTable extends React.Component {

    render() {
      let rows = [];
      this.props.books.forEach((book, i) => {
        rows.push(
					<TableRow
						index={i}
						book ={book}
           	readToggler = {this.props.toggleReadStatus}
            removeBook = {this.props.removeBook}
					/>)
                //pass index n bookObj to row push row created from tableRow
            })
        return (
				<table id="table-of-books">
					<colgroup>
						<col className="title-col"></col>
						<col className="author-col"></col>
					</colgroup>
					<thead>
						<tr>
							<th> title </th>
							<th> author </th>
							<th> pages </th>
							<th> read </th>
							<th> </th>
						</tr>
					</thead>
					<tbody> {rows} </tbody>
				</table>
			)
    }
}

export default BookTable
