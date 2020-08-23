import store from './scratch_redux/customStore';
import * as actions from './redux_fund/actions';

// store.subscrive(() => {
//   console.log();
// });
store.dispatch(actions.bugAdded('woofie'));

console.log(store.getState());
