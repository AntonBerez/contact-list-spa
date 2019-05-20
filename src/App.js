import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Home from './pages/Home/component';
import Create from './pages/Create/component';

const store = configureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
