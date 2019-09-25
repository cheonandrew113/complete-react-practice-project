import React from "react";

class Book extends React.Component {


  state = {
    clicked: false,
    comment: []
  }
  
  otherClickHandler = () => {
    this.props.clickHandler(this.props.book)
  }

  render(){
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img alt="" src={this.props.book.img} onClick={this.otherClickHandler}/>
        <button onClick={() => {this.setState({clicked: !this.state.clicked})}}>Add Comment</button>
        {this.state.clicked? <div><textarea placeholder="add comment here"> </textarea><button>submit comment</button></div> : null}
      </div>
    );
  }
};

export default Book;
