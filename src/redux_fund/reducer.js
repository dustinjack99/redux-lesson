import * as actions from './actionTypes';

let lastId = 0;

// if / else
export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter(bug => bug.id !== action.payload.id);
  else if (action.type === actions.BUG_UPDATED)
    return state.map(bug =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );

  return state;
}

//switch - case
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case 'bugAdded':
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case 'bugRemoved':
//       return state.filter(bug => bug.id !== action.id);

//     default:
//       return state;
//   }
// }
