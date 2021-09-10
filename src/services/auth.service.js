import axios from 'axios';
import R from '../resources';

export default new class AuthService {
    async getCasUser(){
        const resp = await axios.get(R.endpoint.casAccount(), { withCredentials: true });
        if (resp.data){
            console.log(resp); // FIXME remove log
            localStorage.setItem('user', JSON.stringify(resp.data));
        }
        return resp.data;
    }
    casSignout(){
        localStorage.removeItem('user');
        window.location.href = R.endpoint.casSignout();
        /*const resp = await axios.get(R.endpoint.casSignout(), { withCredentials: true });
        if (resp.data){
            console.log(resp); // FIXME remove log
        }
        return resp.data;*/
    }

    async signup(user){
        const resp = await axios.post(R.endpoint.signup(), user);

        if (resp.data) {
            localStorage.setItem('user', resp.data);
        }
        return resp.data;
    }

    async signin(user){
        const resp = await axios.post(R.endpoint.signin(), user, { withCredentials: true });
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