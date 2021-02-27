import { lastIndexOf } from "lodash";
import * as actions from './actionTypes';
export default function reducer(state = [], action) {
    if (action.type === actions.BUG_ADDED)
        return [
            ...state,
            {
                id: ++lastIndexOf,
                description: action.payload.description,
                resolved: false
            }
        ];
    else if (action.type === actions.BUG_REMOVED) 
        return state.filter(bug => bug.id !== action.payload.id);
    return state;
}

