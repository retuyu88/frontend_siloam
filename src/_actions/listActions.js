import { CONSTANTS } from "../_constants";

export const addList = (list) => {
    return {
        type : CONSTANTS.SET_LIST,
        payload : list
    }
}

export const selectedList = (list) => {
    return {
        type : CONSTANTS.SELECTED_LIST,
        payload : list
    }
}