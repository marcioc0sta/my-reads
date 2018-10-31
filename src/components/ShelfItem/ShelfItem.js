import React from 'react';

import {
  Book,
  BookTop,
  BookCover,
  BookTitle,
  BookAuthors,
} from './ShelfItem.styles';

const ShelfItem = ({ book, bookTitle, authors, cover, moveToShelf }) => (
    <Book>
      <BookTop>
        <BookCover imageUrl={cover}></BookCover>
      </BookTop>
      <BookTitle>{bookTitle}</BookTitle>
      <BookAuthors>{authors.map(author => author)}</BookAuthors>
      <button onClick={() => moveToShelf(book, 'wantToRead')}>moverLivro</button>
    </Book>
);

export default ShelfItem;
