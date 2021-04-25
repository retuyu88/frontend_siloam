import { combineReducers } from "redux";
import { authentication} from "./userReducer"
import listsReducer from "./listReducer";

const rootReducer = combineReducers({
    authentication,
    lists : listsReducer,
})

export default rootReducer