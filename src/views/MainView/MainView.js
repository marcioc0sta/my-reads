import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Shelf from '../../components/Shelf/Shelf';

import { OpenSearch } from './MainView.styles';

const MainView = ({ booksShelf, moveToShelf }) => (
  <div>
    <Header />
    <Shelf
      booksShelf={booksShelf}
      moveToShelf={moveToShelf}
      shelfTitle="Currently Reading"
      books={booksShelf.currentlyReading}
    />
    <Shelf
      booksShelf={booksShelf}
      moveToShelf={moveToShelf}
      shelfTitle="Want to Read"
      books={booksShelf.wantToRead}
    />
    <Shelf
      booksShelf={booksShelf}
      moveToShelf={moveToShelf}
      shelfTitle="Read"
      books={booksShelf.read}
    />
    <OpenSearch>
      <Link title="add a book" to="/search">add a book</Link>
    </OpenSearch>
  </div>
);

export default MainView;
