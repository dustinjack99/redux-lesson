import React from 'react';
// import { Provider } from 'react-redux';
import './App.css';
import Bugs from './components/bugs';
import configureAppStore from './store/configureStore';
import StoreContext from './contexts/storeContext';
import * as bugs from './store/bugs';

const store = configureAppStore();

store.subscribe(() => {
  console.log('state changed!');
});

store.dispatch(bugs.bugAdded('woofie1'));
store.dispatch(bugs.bugAdded('woofie2'));
store.dispatch(bugs.bugAdded('woofie3'));
store.dispatch(bugs.bugUpdated(1));

console.log(store.getState());

function App() {
  return (
    <StoreContext.Provider store={store}>
      <Bugs />
    </StoreContext.Provider>
  );
}

export default App;
