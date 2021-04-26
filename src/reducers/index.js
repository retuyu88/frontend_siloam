import { combineReducers } from "redux";
import { authentication,register} from "./userReducer"
import listsReducer from "./listReducer";

const rootReducer = combineReducers({
    authentication,
    register,
    lists : listsReducer,
})

export default rootReducer