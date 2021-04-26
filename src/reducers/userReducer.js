import { CONSTANTS } from "../_constants";

let user = localStorage.getItem('user_token')
const initialState =
    user ? { loggedIn: false, user} : {};
    const initialStateRegister = {
        register : false
    }


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
export function register(state = initialStateRegister, action){
    switch (action.type) {
        case CONSTANTS.REGISTER_REQUEST:
            return{
                registering:true,
            };
        case CONSTANTS.REGISTER_SUCCESS:
            return{
                register:true,
                
            }
        case CONSTANTS.REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
}
