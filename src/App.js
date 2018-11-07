import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ShelfNames } from './ShelfNames.enum';

import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';


import * as BooksAPI from './api/BooksAPI';

const searchInitialState = {
  searchResults: [],
  searchError: ''
};
class App extends Component {
  state = {
    myBooks: [],
    booksShelf: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      none: [],
    },
    isLoading: true,
    searchResults: [],
    searchError: ''
  }

  componentDidMount() {
    this.loadBooks();
  }

  resetSearchState = () => this.setState(searchInitialState);

  activateLoading = () => this.setState({ isLoading: true, });

  notify = message => toast(message, {
    type: 'info',
    position: 'bottom-center',
  });

  filterBook = (list, book) => {
    return list.filter(filteredBook => (
      filteredBook.id !== book.id
    ));
  };

  loadBooks = () => {
    BooksAPI.getAll().then(myBooks => {
      this.setState({
        myBooks,
        booksShelf: {
          ...this.state.booksShelf,
          ...myBooks.reduce((booksShelf, book) => ({
            ...booksShelf,
            [book.shelf]: [].concat((booksShelf[book.shelf] || []), book),
          }), {}),
        },
        isLoading: false,
      });
    });
  }

  manageBookIndex = (arr, index, newItem) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ];

  moveToShelf = (book, shelf) => {
    this.activateLoading();
    BooksAPI.update(book, shelf).then(() => {
      this.updateShelfs(book, shelf);
    });
  }

  pushBookInShelf = (shelf, book) => [...shelf, book];

  mergeMyBooksWithSearch = () => {
    const { myBooks } = this.state;

    myBooks.map(book => {
      const { searchResults } = this.state;

      return searchResults.forEach(item => {
        if (item.id !== book.id) return;

        const index = searchResults.indexOf(item);
        const filtered = this.filterBook(searchResults, book);
        this.setState({
          searchResults: this.manageBookIndex(filtered, index, book)
        });
      });
    });
  }

  makeSearchRequest = searchTerm => {
    if (searchTerm.length === 0) {
      this.resetSearchState();
      return;
    }

    this.resetSearchState();

    BooksAPI.search(searchTerm).then(searchResults => {
      searchResults.map(bookFromResult => {
        bookFromResult.shelf = 'none';
        return this.setState(prevState => ({
          searchResults: this.pushBookInShelf(prevState.searchResults, bookFromResult),
        }));
      });

      this.mergeMyBooksWithSearch();
    }).catch(() => {
      const searchError = 'Sorry, your search doesn\'t match the criteria.';
      this.setState({ searchError });
    });
  }

  updateShelfs = (book, newShelf) => {
    const { booksShelf, searchResults, myBooks } = this.state;
    const { shelf, id } = book;

    if (newShelf === shelf) {
      this.notify('The book is already on the shelf');
      return;
    }

    const updatedShelf = this.filterBook(booksShelf[shelf], book);
    const updatedBookList = this.filterBook(myBooks, book);

    BooksAPI.get(id).then(updatedBook => {
      const updatedSearch = this.filterBook(searchResults, updatedBook);
      const index = searchResults.indexOf(book);
      const successMessage = `
        ${updatedBook.title} has moved to: ${ShelfNames[updatedBook.shelf]}
      `;

      this.setState(() => ({
        myBooks: this.pushBookInShelf(updatedBookList, updatedBook),
        booksShelf: {
          ...this.state.booksShelf,
          [shelf]: updatedShelf,
          [newShelf]: this.pushBookInShelf(booksShelf[newShelf], updatedBook),
        },
        isLoading: false,
        searchResults: this.manageBookIndex(updatedSearch, index, updatedBook)
      }));

      this.notify(successMessage);
    });
  }

  render() {
    const { booksShelf, searchResults, searchError, isLoading } = this.state;

    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <MainView
              isLoading={isLoading}
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
              searchError={searchError}
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
