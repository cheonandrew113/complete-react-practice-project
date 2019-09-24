## Deliverables

The database of books can be found in a JSON-server. If you haven't already done so install json-server:

`TO INSTALL: npm install -g json-server`

Then start the json-server:

`TO START: json-server --watch db.json`

*Your task is to read the deliverables below, read and understand the source code, work through any errors, make the additions/changes necessary to hit all of the deliverables*

- Fetch to `http://localhost:3005/books`. You should get a response that is an array of multiple book objects that look like this:

   `{
   "id": 1,
   "title": "The Great Gatsby",
   "author": "F. Scott Fitzgerald",
   "img": "https://mppl.org/wp-content/uploads/0-214x300.jpg",
   "comments": []
   }`

- When a User clicks the add comment button it should create a text box that allows the user to, optimistically, add a comment for that book
- When a User clicks the show comment button it should show all comments for that book

- Each book can only be added to Book Shelf one time (Book Shelf should not have duplicate books)
