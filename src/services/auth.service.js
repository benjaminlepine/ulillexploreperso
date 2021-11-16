import axios from 'axios';
import R from '../resources';
import authHeader from './auth-header';

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
            localStorage.setItem('user', JSON.stringify(resp.data));
        }
        return resp.data;
    }

    async signout(){
        const token = localStorage.getItem('user').token;
        const resp = await axios.post(R.endpoint.signout(), { token }, { headers: authHeader() });
        this.out();
        return resp.data;
    }

    out(){
        localStorage.removeItem('user');
        localStorage.removeItem('godfatherProfile');
        localStorage.removeItem('godchildProfile');
        localStorage.removeItem('ambassadorProfile');
    }

    async forgotPassword(playload){
        console.log(playload);
        const resp = await axios.post(R.endpoint.forgotPassword(), playload)
        return resp.data;
    }

    async resetPassword(form){ // password & token
        console.log(form);
        const resp = await axios.post(R.endpoint.resetPassword(), form);
        return resp.data;
    }
}
