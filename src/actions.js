import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug 1",
  },
});

export const bugResolved = (description) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    description: "Bug 1",
    resolved: true
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
