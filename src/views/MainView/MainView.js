import React from 'react';

import Header from '../../components/Header/Header';
import Shelf from '../../components/Shelf/Shelf';

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
  </div>
);

export default MainView;
