// import { CONSTANTS } from "../_constants";
import { userService} from "../services";
export const SET_LIST_PENDING = 'SET_LIST_PENDING';
export const SET_LIST_SUCCESS = 'SET_LIST_SUCCESS';
export const SET_LIST_ERROR = 'SET_LIST_ERROR';

function getListsPending() {
    return {
        type: SET_LIST_PENDING
    }
}

function getListsSuccess(products) {
    console.log("here",products)
    return {
        type: SET_LIST_SUCCESS,
        products: products
    }
}

function getListsError(error) {
    return {
        type: SET_LIST_ERROR,
        error: error
    }
}
function register(name, email, password, password_confirmation) {
    return dispatch => {
      // dispatch(request({username}));
  
      userService.register(name, email, password, password_confirmation).then(user => {
      },
      error => {
       
    }
    )
      
    }
  
  }
  function getlist(){
      return dispatch => {
          dispatch(getListsPending());
          userService.getList()
          .then(res => {
              
              if(res.error){
                  throw(res.error)
              }

              dispatch(getListsSuccess(res));
              return res
          })
          .catch(error => {
            dispatch(getListsError(error));
        })
      }
  }
  export default getlist;
//   function fetchProducts() {
//       return dispatch => {
//           dispatch(fetchProductsPending());
//           fetch('https://exampleapi.com/products')
//           .then(res => res.json())
//           .then(res => {
//               if(res.error) {
//                   throw(res.error);
//               }
//               dispatch(fetchProductsSuccess(res.products);
//               return res.products;
//           })
//           .catch(error => {
//               dispatch(fetchProductsError(error));
//           })
//       }
//   }
  
//   export default fetchProducts;

// export const selectedList = (list) => {
//     return {
//         type : CONSTANTS.SELECTED_LIST,
//         payload : list
//     }
// }