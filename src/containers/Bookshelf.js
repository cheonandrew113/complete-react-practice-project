import React from "react";
import Book from "../components/Book";

const Bookshelf = ({ books }) => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{/*render list of books here*/}</ul>
    </div>
  );
};

export default Bookshelf;
