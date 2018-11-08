import React from 'react';
import { get } from 'lodash';

import ShelfItem from '../ShelfItem/ShelfItem';
import { Loader, imagePlaceholder, NoBooks } from '../../Globals';

import { 
  ListBooksContent,
  BookShelfTitle,
  BooksGrid,
} from './Shelf.styles';

const Shelf = ({ shelfTitle, books, moveToShelf, booksShelf, isLoading }) => (
  <ListBooksContent>
    <BookShelfTitle>{shelfTitle}</BookShelfTitle>
    {isLoading ? 
      <Loader/> :
      <BooksGrid>
        {books.length === 0 && <NoBooks>Too bad! no books ☹</NoBooks>}
        {books.map(book => {
          const bookThumbnail = get(
            book,
            'imageLinks.smallThumbnail',
            imagePlaceholder
            );
          return (
            <li key={book.id}>
              <ShelfItem 
                booksShelf={booksShelf}
                moveToShelf={moveToShelf}
                book={book}
                bookTitle={book.title}
                cover={bookThumbnail}
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
