import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  
  state = {
    caughtBook: []
  }

  clickHandler = (book) => {
    // console.log("clicking this:", book)

    this.setState({
      caughtBook: [book, ...this.state.caughtBook]
    })
  }

  removeHandler = (book) => {
    let newArray = this.state.caughtBook.filter(bookObj => bookObj.id != book.id)
    console.log("removing stuff:", newArray)

    this.setState({
      caughtBook: newArray
    })
  }


  render(){
    // console.log("caughtBook:", this.state.caughtBook)
    return (
      <div className="book-container">
        <BookList clickHandler={this.clickHandler}/>
        <Bookshelf book={this.state.caughtBook} clickHandler={this.removeHandler}/>
      </div>
    ); 
  } 
}

export default App;
