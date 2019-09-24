import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {



  
    console.log("what i'm getting: ", props.book    )
    let bookShelfList = props.book.map(eachBook => <Book key={eachBook.id} book={eachBook} clickHandler={props.clickHandler}/>)
  
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{bookShelfList}</ul>
      </div>
    );
  
};

export default Bookshelf;
