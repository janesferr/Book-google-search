import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input } from "../components/Form";
import {SubmitBtn} from "../components/Search";
import Result from "../components/Result";



  class Books extends Component {
    state = {
      books: [],
      search:""

    };
  searchBooks = () => {
    API.getBooks(this.state.search)
    .then(res => {
      console.log("this is it", res.data.items)
      this.setState({
        books: res.data.items,
        search: ""
      })
    }).catch(err => console.log(err));
  };
  
   handleChange = event => {
     const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
   this.searchBooks();
  };
  saveGoogleBook = currentBook => {
    console.log("this book", currentBook);
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link
    })
    .then(res => console.log("Good to go",res))
    .catch(err =>(err));
  }

    render() {
      return (
     <>
            <Jumbotron>
              <h1>Google Books Search</h1>
            </Jumbotron>
            <form>
                    <h5>Search for books</h5>
                    <Input 
                        value={this.state.search}
                        onChange={this.handleChange}
                        name="search"
                        placeholder="e.g. Harry Potter"
                    />
                    <SubmitBtn onClick={this.handleFormSubmit}/>
                </form>
                
                {this.state.books.length ? (
                    <Result 
                    bookState={this.state.books}
                    saveGoogleBook={this.saveGoogleBook}>
                    </Result>
                ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                    </div>
                )}
           </>   
      )
  }

}
export default Books;
