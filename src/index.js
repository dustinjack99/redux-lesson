import * as actions from './redux_fund/actions';
import store from './redux_fund/store';

store.dispatch(actions.bugAdded('woof woof'));
store.dispatch(actions.bugUpdated(0));

console.log(store.getState());
