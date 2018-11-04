import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { 
  SearchBooksBar,
  SearchBooksFormWrapper,
  SearchBooksBarInput,
  CloseSearch,
} from './SearchForm.styles';

class SearchForm extends Component {
  render(){
    return (
      <SearchBooksBar>
        <CloseSearch>
          <Link title="back to home" to="/">back to home</Link>
        </CloseSearch>
        <SearchBooksFormWrapper>
          <form className="search-form">
            <SearchBooksBarInput type="text" placeholder="Search by title or author"/>
          </form>
        </SearchBooksFormWrapper>
      </SearchBooksBar>
    );
  }
}

export default SearchForm;
