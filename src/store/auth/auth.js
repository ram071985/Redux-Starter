export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
export const BUG_RESOLVED = "bugResolved";

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

  let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}

