import { ACTION_ACTION_TYPES } from './action.types';

export const addSelected = (event) => ({type: ACTION_ACTION_TYPES.ADD_SELECTED, payload: event});
export const removeSelected = (event) => ({type: ACTION_ACTION_TYPES.REMOVE_SELECTED, payload: event});