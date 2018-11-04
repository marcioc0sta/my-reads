import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import {
  SearchBooksBar,
  SearchBooksFormWrapper,
  SearchBooksBarInput,
  CloseSearch,
} from './SearchForm.styles';

class SearchForm extends Component {
  onInputSearchChange = value => {
    const { makeSearchRequest } = this.props;
    makeSearchRequest(value);
  }

  render() {
    const debounceSearchChange = debounce(this.onInputSearchChange, 500);
    return (
      <SearchBooksBar>
        <CloseSearch>
          <Link title="back to home" to="/">back to home</Link>
        </CloseSearch>
        <SearchBooksFormWrapper>
          <SearchBooksBarInput
            onChange={event => debounceSearchChange(event.target.value)}
            type="text"
            placeholder="Search by title or author"
          />
        </SearchBooksFormWrapper>
      </SearchBooksBar>
    );
  }
}

export default SearchForm;
