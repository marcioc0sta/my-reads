import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          component={MainView}
        />
        <Route
          path="/search"
          component={SearchView}
        />
      </div>
    );
  }
}

export default App;
