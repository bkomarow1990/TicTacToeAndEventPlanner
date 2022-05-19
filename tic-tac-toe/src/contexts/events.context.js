import { createContext, useReducer } from "react";

export const EventContext = createContext({
    // username property
    selected: [],
    length: 0,
    addSelected: () => null, // setter
    // other data ...
});
const INITIAL_STATE = {
    selected:  [],
    length: 0
}

const ACTION_ACTION_TYPES = {
    ADD_SELECTED: 'ADD_SELECTED',
    GET_LENGTH: 'GET_LENGTH'
};
const actionReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_ACTION_TYPES.ADD_SELECTED:
            return {
                selected: [...state.selected, payload],
                length: state.length+1
            };
    }
}
export const EventProvider = ({ children }) => {
    const [{ selected, length }, dispatch] = useReducer(actionReducer, INITIAL_STATE);

    // action realizations
    const addSelected = (event) => {
        dispatch({ type: ACTION_ACTION_TYPES.ADD_SELECTED, payload: event });
    }

    const value = { selected, length,  addSelected };

    return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}