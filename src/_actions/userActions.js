import { CONSTANTS } from "../_constants";
import { userService} from "../services";

export const userActions = {
  login,
  register
}

function login(username, password) {
  return dispatch => {
    dispatch(request({username}));

    userService.login(username,password).then(user => {
      console.log('user',user)
      if (user.data.auth_token){
        localStorage.setItem('user_token',user.data.auth_token)
      }
      dispatch(success(user))
      window.location.reload()
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
function register(name, email, password, password_confirmation) {
  return dispatch => {
    // dispatch(request({username}));

    userService.register(name, email, password, password_confirmation).then(user => {
      
      // if (user.data.auth_token){
      //   localStorage.setItem('user_token',user.data.auth_token)
      // }
      // dispatch(success(user))
    },
    error => {
      // dispatch(failure(error.toString()));
     
  }
  )
    
  }

}
