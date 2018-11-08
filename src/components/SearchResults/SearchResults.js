import React from 'react';
import { get } from 'lodash';

import ShelfItem from '../ShelfItem/ShelfItem';

import { imagePlaceholder } from '../../Globals';

import { SearchResultsGrid } from './SearchResults.styles';

const SearchResults = ({ results, booksShelf, moveToShelf }) => (
  <SearchResultsGrid>
    {results.map(result => {
      const bookThumbnail = get(
        result,
        'imageLinks.smallThumbnail',
        imagePlaceholder
        );
      return (
        <ShelfItem
          key={result.id}
          booksShelf={booksShelf}
          moveToShelf={moveToShelf}
          book={result}
          bookTitle={result.title}
          cover={bookThumbnail}
          authors={result.authors}
        />
      );
    })}
  </SearchResultsGrid>
);

export default SearchResults;
