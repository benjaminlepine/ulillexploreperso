import axios from 'axios';
import R from '../resources';

export default new class AuthService {
    async signup(user){
        const resp = await axios.post(R.endpoint.signup(), user);

        if (resp.data) {
            localStorage.setItem('user', resp.data);
        }
        return resp.data;
    }

    async signin(user){
        const resp = await axios.post(R.endpoint.signin(), user);
        if (resp.data) {
            console.log(resp); // FIXME remove log
            localStorage.setItem('user', JSON.stringify(resp.data));
        }
        return resp.data;
    }

    signout(){
        localStorage.removeItem('user');
    }

    async resetUserPassword(email){
        console.log(R.endpoint.resetUserPassword());
        const resp = await axios.post(R.endpoint.resetUserPassword(), {email: email})
        if (resp.data){
            return resp.data;
        }
        return resp;
    }

    async changeUserPassword(payload){ // password & token
        const resp = await axios.post(R.endpoint.changeUserPassword(), payload);
        if (resp.data){
            return resp.data;
        }
        return resp;
    }
}