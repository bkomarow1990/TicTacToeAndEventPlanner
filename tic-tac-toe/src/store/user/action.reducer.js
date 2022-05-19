import {ACTION_ACTION_TYPES} from "./action.types";

const INITIAL_STATE = {
    selected:  [],
    length: 0
}
export const actionReducer = (state = INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case ACTION_ACTION_TYPES.ADD_SELECTED:
            return {
                selected: [...state.selected, payload],
                length: state.length + 1
            };
        default:
            return state;
    }
}