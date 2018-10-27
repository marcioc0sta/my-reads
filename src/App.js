import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';

import * as BooksAPI from './api/BooksAPI';
class App extends Component {
  state = {
    booksShelf: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      isLoading: true,
    },
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    BooksAPI.getAll().then(booksList => {
      booksList.forEach(book => {
        this.organizeShelfs(book);
      });
    });
  }

  organizeShelfs(book) {
    this.setState(prevState => ({
      booksShelf: {
        ...prevState.booksShelf,
        [book.shelf]: prevState.booksShelf[book.shelf].concat(book),
        isLoading: false,
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          component={MainView}
        />
        <Route
          path="/search"
          component={SearchView}
        />
      </div>
    );
  }
}

export default App;
