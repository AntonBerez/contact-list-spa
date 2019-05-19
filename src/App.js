import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './App.scss';

import Home from './pages/Home/component';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
