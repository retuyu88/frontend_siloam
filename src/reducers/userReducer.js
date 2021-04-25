import { CONSTANTS } from "../_constants";

let user = JSON.parse(localStorage.getItem('user'))
const initialState =
    user ? { loggedIn: true, user} : {};


export function authentication(state = initialState, action){
    switch (action.type) {
        case CONSTANTS.LOGIN_REQUEST:
            return{
                loggingIn:true,
                user: action.user
            };
        case CONSTANTS.LOGIN_SUCCESS:
            return{
                loggedIn:true,
                user:action.user
            }
        case CONSTANTS.LOGIN_FAILURE:
            return {};
        default:
            return state;
    }
}
