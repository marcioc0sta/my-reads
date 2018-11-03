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
    return (
      <BookShelfChanger>
        <BookShelfChangerSelect 
          onChange={event => this.onShelfChange(event.target.value)}
        >
          <option value="move" disabled="">Move to...</option>
          {this.renderShelfsName().map(shelfName => (
            <option key={shelfName} value={shelfName}>
              {ShelfNames[shelfName]}
            </option>
          ))}
        </BookShelfChangerSelect>
      </BookShelfChanger>
    );
  }
}

export default ShelfChanger;

