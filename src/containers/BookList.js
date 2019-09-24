import React, { Component } from "react";
import Form from "../components/Form";
import Book from "../components/Book"
import SearchForm from '../components/SearchForm'

class BookList extends Component {
  
  state= {
    books: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(response=>response.json())
    .then(data => this.setState({
      books: data
    }))
    console.log("mounting")
  }

  handleFormSubmit = (e, bookObj) => {
  	e.preventDefault()

	  if(!this.state.books.includes(bookObj)) {
  	  this.setState({
  		books: [bookObj, ...this.state.books]
  	  })
  	}
  }


  searchChangeHandler = (e) => {
    // console.log("changing", e.target.value)
    this.setState({
        searchTerm: e.target.value
    })
  }

  filterBookList = () => {

    return this.state.books.filter(book => book.title.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
  }


  render(){
    console.log("state:", this.state.books)
    let bookList = this.filterBookList().map(book => <Book key={book.id} book={book} clickHandler={this.props.clickHandler}/>)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleFormSubmit={this.handleFormSubmit}/><br/>
        <h3>Search: <SearchForm searchTerm={this.state.searchTerm} searchChangeHandler={this.searchChangeHandler} /></h3>
        <br/>
        <ul>{bookList}</ul>
      </div>
    );
  }
}

export default BookList;
