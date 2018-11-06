import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Shelf from '../../components/Shelf/Shelf';

import { OpenSearch } from './MainView.styles';

const MainView = ({ booksShelf, moveToShelf, resetSearchState, isLoading }) => (
  <div>
    <Header />
    <Shelf
      isLoading={isLoading}
      booksShelf={booksShelf}
      moveToShelf={moveToShelf}
      shelfTitle="Currently Reading"
      books={booksShelf.currentlyReading}
    />
    <Shelf
      isLoading={isLoading}
      booksShelf={booksShelf}
      moveToShelf={moveToShelf}
      shelfTitle="Want to Read"
      books={booksShelf.wantToRead}
    />
    <Shelf
      isLoading={isLoading}
      booksShelf={booksShelf}
      moveToShelf={moveToShelf}
      shelfTitle="Read"
      books={booksShelf.read}
    />
    <OpenSearch>
      <Link 
        onClick={()=> resetSearchState()}
        title="add a book"
        to="/search"
      >
        add a book
      </Link>
    </OpenSearch>
  </div>
);

export default MainView;
