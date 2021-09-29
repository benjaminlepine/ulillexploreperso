
export default function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
     
    if (user){
        if (user.token){ // student extern
            return  {Authorization: 'Bearer ' + user.token};
        }else if (user.cookie) { // user cas
            return  {Authorization : user.cookie };
        }else {
            return {};
        }
    }else {
        return {};
    }
}