import React from "react";

class Book extends React.Component {


  state = {
    clicked: false
  }
  
  otherClickHandler = () => {
    this.props.clickHandler(this.props.book)
  }

  render(){
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img alt="" src={this.props.book.img} onClick={this.otherClickHandler}/>
        <button onClick={() => {this.setState({clicked: !this.state.clicked})}}>See Author</button>
        {this.state.clicked? <h3>{this.props.book.author}</h3> : null}
      </div>
    );
  }
};

export default Book;
