// import List from "../components/List";
import { CONSTANTS } from "../_constants";
import {
  SET_LIST_PENDING,
  SET_LIST_SUCCESS,
  SET_LIST_ERROR,
} from "../_actions/listActions";

const listInitialState = {
  pending: false,
    products: [],
    error: null
}

export function listsReducer(listState = listInitialState, action) {
  switch (action.type) {
    case SET_LIST_PENDING:
      return {
        ...listState,
        pending: true,
      };
    case SET_LIST_SUCCESS:
      // console.log("HERE",action.payload)
      return {
        ...listState,
        pending: false,
        products: action.products,
      };
    case SET_LIST_ERROR:
      return {
        ...listState,
        pending: false,
        error: action.error,
      };
    default:
      return listState;
  }
}
export const getLists = (listState) => listState.listsReducer.products;
export const getListsPending = (listState) => listState.listsReducer.pending;
export const getListsError = (listState) => listState.listsReducer.error;

// export default listsReducer;
