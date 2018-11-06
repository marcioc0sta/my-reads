import React from 'react';

import ShelfItem from '../ShelfItem/ShelfItem';
import { Loader } from '../../Globals';

import { 
  ListBooksContent,
  BookShelfTitle,
  BooksGrid,
  NoBooks,
} from './Shelf.styles';

const Shelf = ({ shelfTitle, books, moveToShelf, booksShelf, isLoading }) => (
  <ListBooksContent>
    <BookShelfTitle>{shelfTitle}</BookShelfTitle>
    {isLoading ? 
      <Loader/> :
      <BooksGrid>
        {books.length === 0 && <NoBooks>Too bad! no books ☹</NoBooks>}
        {books.map(book => {
          return (
            <li key={book.id}>
              <ShelfItem 
                booksShelf={booksShelf}
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
    }
  </ListBooksContent>
);

export default Shelf;
