import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';


import * as BooksAPI from './api/BooksAPI';

const searchInitialState = {
  searchResults: [],
  searchError: ''
};
class App extends Component {
  state = {
    booksList: [],
    booksShelf: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      none: [],
      isLoading: true,
    },
    searchResults: [],
    searchError: ''
  }

  componentDidMount() {
    this.loadBooks();
  }

  resetSearchState = () => {
    this.setState(searchInitialState);
  }

  loadBooks = () => {
    BooksAPI.getAll().then(booksList => {
      this.setState({ booksList });
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

  insertBooksFromSearch = (arr, index, newItem) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ];

  makeSearchRequest = searchTerm => {
    if (searchTerm.length === 0) return;

    const { booksList } = this.state;
    this.resetSearchState();

    BooksAPI.search(searchTerm).then(searchResults => {
      searchResults.map(bookFromResult => {
        bookFromResult.shelf = 'none';
        return this.setState(prevState => ({
          searchResults: prevState.searchResults.concat(bookFromResult)
        }));
      });

      booksList.map(book => {
        const { searchResults } = this.state;
        return searchResults.forEach(item => {
          if (item.id === book.id) {
            const index = searchResults.indexOf(item);
            const filtered = searchResults.filter(item => item.id !== book.id);
            this.setState({
              searchResults: this.insertBooksFromSearch(filtered, index, book)
            });
          }
        });
      });
    }).catch(() => {
      this.setState({
        searchError: 'Sorry, your search term does not match the criteria.',
      });
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
    const { booksShelf, searchResults, booksList } = this.state;
    const { shelf, id } = book;

    if (newShelf === shelf) {
      this.notify();
      return;
    }

    this.activateLoading();

    const updatedShelf = booksShelf[shelf].filter(filteredBook => (
      filteredBook.id !== id
    ));
    const updatedBookList = booksList.filter(filteredBook => (
      filteredBook.id !== id
    ));

    BooksAPI.get(id).then(updatedBook => {
      const updatedSearch = searchResults.filter(filteredBook => (
        filteredBook.id !== updatedBook.id
      ));
      this.setState(() => ({
        booksList: updatedBookList.concat(updatedBook),
        booksShelf: {
          ...this.state.booksShelf,
          [shelf]: updatedShelf,
          [newShelf]: booksShelf[newShelf].concat(updatedBook),
          isLoading: false,
        },
        searchResults: [...updatedSearch, updatedBook],
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
            <MainView
              resetSearchState={this.resetSearchState}
              moveToShelf={this.moveToShelf}
              booksShelf={booksShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchView
              resetSearchState={this.resetSearchState}
              booksShelf={booksShelf}
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
