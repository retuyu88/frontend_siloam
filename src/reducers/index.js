import { combineReducers } from "redux";
import { authentication,register} from "./userReducer"


const rootReducer = combineReducers({
    authentication,
    register,
    
    
})

export default rootReducer