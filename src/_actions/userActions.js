
import { userService} from "../services";


export const userActions = {
  submitForm,

}

function submitForm(username, password) {
 
  return dispatch => {
   

    userService.submit(username,password).then(user => {
     
      if (user.data.auth_token){
        localStorage.setItem('user_token',user.data.auth_token)
      }
      // dispatch(success(user))
   
    },
    error => {
      console.log(error)
     
  }
  )
    
  }

}

