import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id,
  },
});

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug 1",
//     },
//   };
// }

// function bugRemoved(description) {
//   return {
//     type: actions.BUG_REMOVED,
//     payload: {
//       id: 1,
//     },
//   };
// }
