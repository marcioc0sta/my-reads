import React from 'react';

import {
  Book,
  BookTop,
  BookCover,
  BookTitle,
  BookAuthors,
} from './ShelfItem.styles';

const ShelfItem = ({ bookTitle, authors, cover }) => (
    <Book>
      <BookTop>
        <BookCover imageUrl={cover}></BookCover>
      </BookTop>
      <BookTitle>{bookTitle}</BookTitle>
      <BookAuthors>{authors.map(author => author)}</BookAuthors>
    </Book>
);

export default ShelfItem;
