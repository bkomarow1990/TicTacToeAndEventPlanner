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
        case ACTION_ACTION_TYPES.REMOVE_SELECTED:
            const ind = state.selected.findIndex(el => el.id === payload);
            //console.log("ind = "+ind);
            return{
                
               selected: [...state.selected.slice(0, ind), ...state.selected.slice(ind + 1)], 
               length: state.length-1
            }
            //state.selected.slice(ind)
            //[...state.selected.splice(ind, 1)]
            //selected: state.selected.filter(el => el.id !== payload)
        default:
            return state;
    }
}