import { CONSTANTS } from "../_actions";

export const addList = (lisID, text) => {
    return {
        type : CONSTANTS.ADD_CARD,
        payload : (text,listID)
    }
}