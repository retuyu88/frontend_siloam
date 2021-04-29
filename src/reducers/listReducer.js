// import List from "../components/List";

import {
  SET_LIST_PENDING,
  SET_LIST_SUCCESS,
  SET_LIST_ERROR,
  SET_SUB_LIST_ERROR,
  SET_SUB_LIST_PENDING,
  SET_SUB_LIST_SUCCESS,
  ADD_SUB_LIST,
  DELETE_SUB_LIST,
  EDIT_SUB_LIST
} from "../_actions/listActions";

const listInitialState = {
  pending: false,
    products: [],
    subProducts: [],
    error: null,
    count: null
}
// const subListInitialState = {
//   pending: false,
//     subProducts: [],
//     error: null
// }

export function listsReducer(listState = listInitialState, action) {
  
  switch (action.type) {
    case SET_LIST_PENDING:
      return {
        ...listState,
        pending: true,
      };
    case SET_LIST_SUCCESS:
      console.log("HERE",action.products)
      return {
        ...listState,
        pending: false,
        products: action.products,
      };
      case SET_SUB_LIST_SUCCESS:
        console.log("HERE",listState.subProducts)
        return {
          ...listState,
          pending: false,
          subProducts: listState.subProducts.concat(action.subProducts)
        };
    case SET_LIST_ERROR:
      return {
        ...listState,
        pending: false,
        error: action.error,
      };
      case ADD_SUB_LIST:
        // console.log("HERE")
      return {
        ...listState,
        product: action.product
      }
      case DELETE_SUB_LIST:
       
        // console.log('subproducts ' ,action.subProducts)
      return {
        ...listState,
        subProducts : listState.subProducts.filter(item => 
        item.id !== action.subProducts
    )
      }
      case EDIT_SUB_LIST:
       
        // console.log('subproducts ' ,action.subProducts)
      return {
        ...listState,
        subProducts : listState.subProducts.map(val =>
          val.id === action.subProducts.id ? val = action.subProducts : val
            
          )
    
      }
      
    default:
      return listState;
  }
}
export const getLists = (listState) => listState.listsReducer.products;
export const getSubLists = (listState) => listState.listsReducer.subProducts;;
export const getListsPending = (listState) => listState.listsReducer.pending;
export const getListsError = (listState) => listState.listsReducer.error;


export function subListsReducer(listState = listInitialState, action) {
  switch (action.type) {
    case SET_SUB_LIST_PENDING:
      return {
        ...listState,
        pending: true,
      };
   
    case SET_SUB_LIST_ERROR:
      return {
        ...listState,
        pending: false,
        error: action.error,
      };
    default:
      return listState;
  }
}
// export const getSubLists = (listState) => listState.listsReducer.subProducts;
// export const getSubListsPending = (listState) => listState.listsReducer.pending;
// export const getSubListsError = (listState) => listState.listsReducer.error;

// export default listsReducer;
