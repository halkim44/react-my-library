import React from 'react';
import BookTable from './components/BookTable'
import './App.css';
import userBooks , {updateLS} from './data/storage';
import Modal from './components/modal';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state= {
      books: userBooks
    }
  }
render() {
  let self = this;
  function removeBook(index) {
    userBooks.splice(index, 1);
    updateLS();

    self.setState({
      books: userBooks
    })
  }
  function addNewBook(bookObj) {
    userBooks.push(bookObj);
    updateLS();
    self.setState({
      books: userBooks
    });
  }
  function toggleReadStatus(index) {
    userBooks[index].read = !userBooks[index].read;
    updateLS();
    self.setState({
      books: userBooks
    });
  }
  return (
    <div className="container">
      <section className="header">
        <h1>D I R T</h1>
        <p> Did I Read That</p>
      </section>

      <section id="table-section">
        <BookTable
          books={ this.state.books }
          removeBook={removeBook}
          toggleReadStatus={toggleReadStatus} />
      </section>

      <section id="add-book-section">
        <Modal callback={addNewBook}/>
      </section>
    </div>
  );
}
}

export default App;
