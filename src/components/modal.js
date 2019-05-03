import React from 'react';
import './modal.css';

class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            show: false
        })
    }

    componentDidMount() {
        this.checkFormValidity();
    }
    checkFormValidity(){
        let submitBtn = document.getElementById('submit-button');
        for (let i = 0; i < document.forms[0].length; i++) {
          if (!document.forms[0][i].checkValidity()) {
            submitBtn.setAttribute("disabled", "");
            break;
          }
          submitBtn.removeAttribute("disabled");
        }
    }
    render() {
        let self = this;
        function openModal() {
            console.log('called');
            self.setState({
                show: true
            })
        }
        function closeModal() {
            self.setState({
                show: false
            })
            document.forms[0].reset();
        }
        class Book {
            constructor(title, author, pages, read) {
                this.title = title;
                this.author = author;
                this.pages = pages;
                this.read = read;
            }
        }

        function registerNewBook() {
            let title = document.forms[0][0].value;
            let author = document.forms[0][1].value;
            let pages = document.forms[0][2].value;
            let read = document.forms[0].elements['read'].value;
            read = read === "yes" ? true : false;
          
            self.props.callback(new Book(title, author, pages, read));
            closeModal();
            self.checkFormValidity();
        }
        
        return(
            <div className="modal-container">
                <button className="show-form-btn" onClick={openModal}>
                    ADD BOOK
                </button>
                <div
                    className={this.state.show? "modal show": "modal hide"}>
                    <div className="back-drop" onClick={closeModal}></div>
                    <div className="modal-content">
                        <span class="close-button" onClick={closeModal}>&times;</span>
                        <form id="book-info">
                            <legend>Book's information</legend>
                            <input type="text" id="title" name="book_name" required={true} onInput={this.checkFormValidity} placeholder="Title *"/>
                            <input type="text" id="author" name="book_author" required={true} onInput={this.checkFormValidity} placeholder="Author *"/>
                            <input type="number" id="pages" name="book_pages" required={true} onInput={this.checkFormValidity} /><br />

                            <fieldset>
                                <legend>have you read it?</legend>
                                <p>
                                    <input type="radio" name="read" id="read_yes" value="yes" />
                                    <label for="read_yes">Yes</label>
                                </p>
                                <p>
                                    <input type="radio" name="read" id="read_no" value="no" checked={true} />
                                    <label for="read_no">No</label>
                                </p>
                            </fieldset>
                            <button id="submit-button" type="button" onClick={registerNewBook}>NEW BOOK</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    //form validation function
    // create a book object from book class

    // pass new book created from Book class to addNewBook
}

export default Modal;
