import React from 'react';

import ShelfItem from '../ShelfItem/ShelfItem';

import { 
  ListBooksContent,
  BookShelfTitle,
  BooksGrid,
} from './Shelf.styles';

const Shelf = ({ shelfTitle, books, moveToShelf }) => (
  <ListBooksContent>
    <BookShelfTitle>{shelfTitle}</BookShelfTitle>
    <BooksGrid>
      {books.map(book => {
        return (
          <li key={book.id}>
            <ShelfItem 
              moveToShelf={moveToShelf}
              book={book}
              bookTitle={book.title}
              cover={book.imageLinks.smallThumbnail}
              authors={book.authors}
            />
          </li>
        );
      })}
    </BooksGrid>
  </ListBooksContent>
);

export default Shelf;
