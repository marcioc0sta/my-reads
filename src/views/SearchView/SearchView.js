import React from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResults from '../../components/SearchResults/SearchResults';

const SearchView = ({ 
  makeSearchRequest, 
  searchResults, 
  booksShelf, 
  moveToShelf, 
  resetSearchState 
}) => (
  <div className="search-books">
    <SearchForm 
      resetSearchState={resetSearchState}
      makeSearchRequest={makeSearchRequest}
    />
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
