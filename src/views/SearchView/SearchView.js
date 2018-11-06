import React from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResults from '../../components/SearchResults/SearchResults';

const SearchView = ({ 
  makeSearchRequest, 
  searchResults, 
  booksShelf, 
  moveToShelf, 
  resetSearchState,
  searchError,
}) => (
  <div className="search-books">
    <SearchForm 
      resetSearchState={resetSearchState}
      makeSearchRequest={makeSearchRequest}
    />
    {searchError.length === 0 &&
      <SearchResults
        moveToShelf={moveToShelf}
        booksShelf={booksShelf}
        results={searchResults} 
      />
    }
  </div>
);

export default SearchView;
