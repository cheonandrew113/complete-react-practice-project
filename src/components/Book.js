import React from "react";

class Book extends React.Component {
  
  otherClickHandler = () => {
    this.props.clickHandler(this.props.book)
}

  

  render(){
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img alt="" src={this.props.book.img} onClick={this.otherClickHandler}/>
        <button>Add Comment</button>
        <button>Show all Comments</button>
      </div>
    );
  }
};

export default Book;
