import * as actions from './actionTypes';
import store from './store';

export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugUpdated = id => ({
  type: actions.BUG_UPDATED,
  payload: {
    id,
  },
});

// export function bugAdded(description) {
//   store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   });
// }

export function bugRemoved(id) {
  store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
      id: id,
    },
  });
}
