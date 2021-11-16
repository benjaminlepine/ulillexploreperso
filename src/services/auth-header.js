
export default function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
     
    if (user){
        if (user.token){
            return  { Authorization: user.token };
        }
    }
    return {};
}