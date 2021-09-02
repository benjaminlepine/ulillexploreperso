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

    async forgotPassword(lang, email){
        const resp = await axios.post(R.endpoint.forgotPassword(lang), {email: email})
        if (resp.data){
            return resp.data;
        }
        return resp;
    }

    async resetPassword(form){ // password & token
        const resp = await axios.post(R.endpoint.resetPassword(), form);
        if (resp.data){
            return resp.data;
        }
        return resp;
    }
}