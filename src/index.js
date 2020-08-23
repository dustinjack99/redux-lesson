import configureStore from './redux_fund/store/configureStore';
import * as bugs from './redux_fund/store/bugs';

const store = configureStore();

store.subscribe(() => {
  console.log('state changed!');
});

store.dispatch(bugs.bugAdded('woofie1'));
store.dispatch(bugs.bugAdded('woofie2'));
store.dispatch(bugs.bugAdded('woofie3'));
store.dispatch(bugs.bugUpdated(1));

console.log(store.getState());
