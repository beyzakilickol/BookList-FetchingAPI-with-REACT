import React, { Component } from 'react';
import BookList from './components/BookList'
import './App.css';

class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        books : [],
      }
    }
    componentDidMount = () => {
      fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json').then((data)=>{
         return data.json()
      }).then((json)=>{
          console.log(json)
          this.setState({
            books: json,
          })
        })



    }
  render() {
    return (
      <div>
    <h1 className="title">BookList</h1>
    <BookList books={this.state.books}/>
    </div>
    );
  }
}

export default App;
