import React from "react";

class Book extends React.Component {


  state = {
    showComments: false,
    comments: [],
    newComment: "",
    allComments: false,
    commentsForm: false
  }
  

  handleAddComment = () => {
    this.setState({
      commentsForm: !this.state.commentsForm
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCommentSubmit = (event) => {
    // console.log("Comment: ", this.state.newComment)
    event.preventDefault()
    this.setState({
      comments: [...this.state.comments, this.state.newComment]
    })
    this.setState({
      newComment: ""
    })
  }

  handleShowComments = () => {
    console.log("comments: ", this.state.comments.join(". "))
    this.setState({
      allComments: !this.state.allComments
    })
  }


  addBookShelf = () => {
    this.props.clickHandler(this.props.book)
  }

  render(){

    const commentForm = 
      <div>  
        <textarea name = "newComment" placeholder = "Please add your comment here..." value = {this.state.newComment} onChange = {this.handleChange}/>
        <br></br>
        <button onClick = {this.handleCommentSubmit}>Submit</button>
      </div>


    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img alt="" src={this.props.book.img} onClick={this.addBookShelf}/>
        <br/>
        <button onClick = {this.handleAddComment}>Add Comment</button>
          {this.state.commentsForm ? commentForm : null} 
      
        <button onClick = {this.handleShowComments}>Show comments</button>
          {this.state.allComments ? <ul>{this.state.comments.map(comment => <li key = {comment}>{comment}</li>)}</ul> : null}
      </div>
    );
  }
};

export default Book;
