import React from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResults from '../../components/SearchResults/SearchResults';

const SearchView = ({ makeSearchRequest, searchResults, booksShelf, moveToShelf }) => (
  <div className="search-books">
    <SearchForm makeSearchRequest={makeSearchRequest} />
    {searchResults !== undefined &&
      <SearchResults
        moveToShelf={moveToShelf}
        booksShelf={booksShelf}
        results={searchResults} 
      />
    }
  </div>
);

export default SearchView;
