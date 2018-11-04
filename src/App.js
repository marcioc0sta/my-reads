import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';


import * as BooksAPI from './api/BooksAPI';
class App extends Component {
  state = {
    booksShelf: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      none: [],
      isLoading: true,
    },
    searchResults: [],
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    BooksAPI.getAll().then(booksList => {
      booksList.forEach(book => {
        this.organizeShelfs(book);
      });
    });
  }

  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateShelfs(book, shelf);
    });
  }

  makeSearchRequest = searchTerm => { 
    BooksAPI.search(searchTerm).then(searchResults => {
      this.setState({searchResults});
    });
  }

  organizeShelfs = book => {
    const { booksShelf } = this.state;
    this.setState(() => ({
      booksShelf: {
        ...this.state.booksShelf,
        [book.shelf]: booksShelf[book.shelf].concat(book),
        isLoading: false,
      }
    }));
  }

  activateLoading = () => {
    this.setState({
      booksShelf: {
        ...this.state.booksShelf,
        isLoading: true,
      }
    });
  }

  notify = () => toast('The book is already on the shelf', {
    type: 'info',
    position: 'bottom-center',
  });

  updateShelfs = (book, newShelf) => {
    const { booksShelf } = this.state;
    const { shelf, id } = book;

    if(newShelf === shelf) {
      this.notify();
      return;
    }

    this.activateLoading();

    const updatedShelf = booksShelf[shelf].filter(filteredBook => (
      filteredBook.id !== id
    ));

    BooksAPI.get(id).then(updatedBook => {
      this.setState(() => ({
        booksShelf: {
          ...this.state.booksShelf,
          [shelf]: updatedShelf,
          [updatedBook.shelf]: booksShelf[updatedBook.shelf].concat(updatedBook),
          isLoading: false,
        }
      }));
    });
  }

  render() {
    const { booksShelf, searchResults } = this.state;
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <MainView moveToShelf={this.moveToShelf} booksShelf={booksShelf} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchView 
              searchResults={searchResults}
              makeSearchRequest={this.makeSearchRequest}
              moveToShelf={this.moveToShelf}
            />
          )}
        />
        <ToastContainer type="warning" />
      </div>
    );
  }
}

export default App;
