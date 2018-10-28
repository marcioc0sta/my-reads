import React from 'react';

import Header from '../../components/Header/Header';
import Shelf from '../../components/Shelf/Shelf';

const MainView = ({ booksShelf }) => (
  <div>
    <Header />
    <Shelf shelfTitle="Currently Reading" books={booksShelf.currentlyReading} />
    <Shelf shelfTitle="Want to Read" books={booksShelf.wantToRead} />
    <Shelf shelfTitle="Read" books={booksShelf.read} />
  </div>
);

export default MainView;
