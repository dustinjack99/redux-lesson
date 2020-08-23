import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Bugs from './components/bugs';
import configureAppStore from './store/configureStore';

const store = configureAppStore();

console.log(store);

function App() {
  return (
    <Provider store={store}>
      <Bugs />
    </Provider>
  );
}

export default App;
