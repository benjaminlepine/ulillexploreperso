
export default function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
     
    if (user){
        if (user.fullToken){ // student extern
            return  {Authorization: user.fullToken};
        }else {
            // FIXME use cas cookie
            return {};
        }
    }else {
        return {};
    }
}