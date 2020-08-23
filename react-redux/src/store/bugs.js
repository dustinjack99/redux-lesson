import store from './configureStore';

//ACTION TYPES
const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_UPDATED = 'bugUpdated';

//ACTION CREATORS
export const bugAdded = description => ({
  type: BUG_ADDED,
  payload: {
    description,
  },
});

export const bugUpdated = id => ({
  type: BUG_UPDATED,
  payload: {
    id,
  },
});

export function bugRemoved(id) {
  store.dispatch({
    type: BUG_REMOVED,
    payload: {
      id: id,
    },
  });
}

//REDUCERS
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED)
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === BUG_REMOVED)
    return state.filter(bug => bug.id !== action.payload.id);
  else if (action.type === BUG_UPDATED)
    return state.map(bug =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );

  return state;
}
