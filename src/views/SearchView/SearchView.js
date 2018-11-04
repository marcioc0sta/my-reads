import React from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';

const SearchView = ({ makeSearchRequest }) => (
  <div className="search-books">
    <SearchForm makeSearchRequest={makeSearchRequest} />
  </div>
);

export default SearchView;
