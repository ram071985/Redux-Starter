import * as actions from './actionTypes';

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: "Bug 1",
    },
  };
}

// function bugRemoved(description) {
//   return {
//     type: actions.BUG_REMOVED,
//     payload: {
//       id: 1,
//     },
//   };
// }
