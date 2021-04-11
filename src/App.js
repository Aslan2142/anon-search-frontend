import React from 'react';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';

import './App.scss'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route component={() => <Home query={useLocation().search} />} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;