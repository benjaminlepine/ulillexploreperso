import axios from 'axios';
import R from '../resources';

export default new class AuthService {
    async getCasUser(){
        const resp = await axios.get(R.endpoint.casAccount(), { withCredentials: true });
        if (resp.data){
            const roles = resp.data.roles ;
            if (roles && roles.includes("admin")){
                this.casSignout();
            }
            localStorage.setItem('user', JSON.stringify(resp.data));
        }
        return resp.data;
    }
    casSignout(){
        this.out();
        window.location.href = R.endpoint.casSignout();
    }

    async signup(user){
        const resp = await axios.post(R.endpoint.signup(), user, { withCredentials: true });

        if (resp.data) {
            localStorage.setItem('user', resp.data);
        }
        return resp.data;
    }

    async signin(user){
        const resp = await axios.post(R.endpoint.signin(), user, { withCredentials: true });
        if (resp.data) {
            localStorage.setItem('user', JSON.stringify(resp.data));
        }
        return resp.data;
    }

    signout(){
        this.out();
    }
    out(){
        localStorage.removeItem('user');
        localStorage.removeItem('godfatherProfile');
        localStorage.removeItem('godchildProfile');
        localStorage.removeItem('ambassadorProfile');
    }

    async forgotPassword(playload){
        console.log(playload);
        const resp = await axios.post(R.endpoint.forgotPassword(), playload, { withCredentials: true })
        return resp.data;
    }

    async resetPassword(form){ // password & token
        console.log(form);
        const resp = await axios.post(R.endpoint.resetPassword(), form, { withCredentials: true });
        return resp.data;
    }
}
