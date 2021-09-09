
export default function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
     
    if (user){
        if (user.token){ // student extern
            return  {Authorization: 'Bearer ' + user.token};
        }else {
            // FIXME use cas cookie
            return  {withCredentials: true};
        }
    }else {
        return {};
    }
}