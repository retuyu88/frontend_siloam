import { combineReducers } from "redux";
import { authentication,register} from "./userReducer"
import {listsReducer,subListsReducer} from "./listReducer";

const rootReducer = combineReducers({
    authentication,
    register,
    listsReducer,
    subListsReducer
    
})

export default rootReducer