import React from 'react';

import ShelfChanger from '../ShelfChanger/ShelfChanger';

import {
  Book,
  BookTop,
  BookCover,
  BookTitle,
  BookAuthors,
} from './ShelfItem.styles';

const ShelfItem = props => {
  const { book, bookTitle, authors, cover, moveToShelf, booksShelf } = props;
  return (
    <Book>
      <BookTop>
        <BookCover imageUrl={cover}></BookCover>
        <ShelfChanger
          book={book}
          booksShelf={booksShelf}
          moveToShelf={moveToShelf}
        />
      </BookTop>
      <BookTitle>{bookTitle}</BookTitle>
      <BookAuthors>{authors.map(author => author)}</BookAuthors>
    </Book>
  );
};

export default ShelfItem;
