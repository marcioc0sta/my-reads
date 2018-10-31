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

  updateShelfs = (book, newShelf) => {
    const { booksShelf } = this.state;
    const { shelf, id } = book;
    const updatedShelf = booksShelf[shelf].filter(filteredBook => (
      filteredBook.id !== id
    ));

    this.setState(prevState => ({
      booksShelf: {
        ...prevState.booksShelf,
        [book.shelf]: updatedShelf,
        [newShelf]: booksShelf[newShelf].concat(book),
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
            <MainView moveToShelf={this.moveToShelf} booksShelf={booksShelf} />
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
