import React, { Component } from 'react';


const bookImgURL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'
class BookList extends Component {
  render() {
  let bookItem = this.props.books.map((each)=>{
    return <div className="card">
      <img className="card-img-top" src={`${bookImgURL}${each.imageLink}`} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{each.title}</h5>
        <p className="card-text"> Author: {each.author}<br/>Language:{each.language}</p>
        <p className="card-text"><small className="text-muted">{each.country}</small></p>
      </div>
    </div>
  })



    return (
      <div className="container">
        {bookItem}
      </div>
    );
  }

}
export default BookList
