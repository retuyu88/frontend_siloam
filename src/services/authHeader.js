export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user_token'));

    if( user.accessToken){
        return { Authorization : 'Bearer' + user.accessToken}
    }else {
        return {}
    }
}