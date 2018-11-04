import React, { Component } from 'react';

import { ShelfNames } from './ShelfNames.enum';

import {
  BookShelfChanger,
  BookShelfChangerSelect,
} from './ShelfChanger.styles';

class ShelfChanger extends Component {
  onShelfChange = shelf => {
    const { moveToShelf, book } = this.props;
    moveToShelf(book, shelf);
  }

  renderShelfsName = () => {
    const { booksShelf } = this.props;
    const { isLoading, ...shelfsObject } = booksShelf; // eslint-disable-line

    return Object.keys(shelfsObject);
  }

  render() {
    const { book } = this.props;
    return (
      <BookShelfChanger>
        <BookShelfChangerSelect
          onChange={event => this.onShelfChange(event.target.value)}
        >
          <option disabled="">Move to...</option>
          {this.renderShelfsName().map(shelfObjKey => (
            <option key={shelfObjKey} value={shelfObjKey}>
              {book.shelf === shelfObjKey && '✓'}
              {ShelfNames[shelfObjKey]}
            </option>
          ))}
        </BookShelfChangerSelect>
      </BookShelfChanger>
    );
  }
}

export default ShelfChanger;

