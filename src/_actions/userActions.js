import { CONSTANTS } from "../_constants";
import { userService} from "../services";

export const userActions = {
  login,
  getList,
  addList
}

function login(username, password) {
  return dispatch => {
    dispatch(request({username}));

    userService.login(username,password).then(user => {
      dispatch(success(user))
    },
    error => {
      dispatch(failure(error.toString()));
     
  }
  )
    
  }
  function request(user) { return { type: CONSTANTS.LOGIN_REQUEST, user } }
  function success(user) { return { type: CONSTANTS.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: CONSTANTS.LOGIN_FAILURE, error } }
}
function getList(){
  return dispatch => {
    userService.getList().then(list => {
      return list
    })
  }
}

function addList(){
  return dispatch => {
    userService.getList().then(list => {
      return list
    })
  }
}
