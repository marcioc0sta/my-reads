import React from 'react';

import ShelfItem from '../ShelfItem/ShelfItem';

import {SearchResultsGrid} from './SearchResults.styles';

const SearchResults = ({ results, booksShelf, moveToShelf }) => (
  <SearchResultsGrid>
    {results.map(result => {
      return (
        <ShelfItem
          key={result.id}
          booksShelf={booksShelf}
          moveToShelf={moveToShelf}
          book={result}
          bookTitle={result.title}
          cover={result.imageLinks.smallThumbnail}
          authors={result.authors}
        />
      );
    })}
  </SearchResultsGrid>
);

export default SearchResults;
