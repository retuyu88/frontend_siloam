import { CONSTANTS } from "../_actions";

const initialState = [
    {
        user : null
    }
]

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.LOGIN_REQUEST:
            return {
                
            }

        default:
            return state;
    }
}

export default userReducer;