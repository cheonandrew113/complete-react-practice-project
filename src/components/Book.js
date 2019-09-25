import React from "react";

class Book extends React.Component {


  state = {
    showComments: false,
    comments: []
  }
  
  addBookShelf = () => {
    this.props.clickHandler(this.props.book)
  }

  render(){




    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img alt="" src={this.props.book.img} onClick={this.addBookShelf}/>
        <button onClick={() => {this.setState({showComments: !this.state.showComments})}}>Add Comment</button>
        <button>All comments</button>
        {this.state.showComments? <div><textarea placeholder="add comment here"> </textarea><button>submit comment</button></div> : null}
      </div>
    );
  }
};

export default Book;
