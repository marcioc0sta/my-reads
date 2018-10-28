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
    const booksShelf = book.shelf;

    this.setState(prevState => ({
      booksShelf: {
        ...prevState.booksShelf,
        [booksShelf]: prevState.booksShelf[booksShelf].concat(book),
        isLoading: false,
      }
    }));
  }

  render() {
    const { booksShelf } = this.state;
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <MainView booksShelf={booksShelf} />
          )}
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
