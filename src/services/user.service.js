import axios from 'axios';
import authHeader from './auth-header';
import R from '../resources';

export default new class UserService {
    async fetchProfile(){
        const resp = await axios.get();
        return resp.data;
    }
    async fetchHobbies(lang){
        const resp = await axios.get(R.endpoint.hobbies(lang), { headers: authHeader() });
        return resp.data;
    }
    async fetchActivities(lang){
        const resp = await axios.get(R.endpoint.activities(lang), { headers: authHeader() });
        return resp.data;
    }
    async fetchHobbiesAndActivities(lang){
        const resp = await axios.get(R.endpoint.hobbiesActivities(lang), { headers: authHeader() });
        return resp.data;
    }

    async fetchFaculties(){
        const resp = await axios.get(R.endpoint.faculties(), { headers: authHeader() });
        return resp.data;
    }

    async createGodchildProfil(godchildProfil){
        const resp = await axios.post(R.endpoint.createGodchildProfil(), godchildProfil, { headers: authHeader() });
        return resp.data;
    }

    async createGodfatherProfil(godfatherProfile){
        const resp = await axios.post(R.endpoint.createGodfatherProfil(), godfatherProfile, { headers: authHeader() });
        return resp.data;
    }

    async subscribeToAmbassador(isUE){
        const resp = await axios.post(R.endpoint.subscribeToAmbassador(isUE), null, { headers: authHeader() });
        console.log(resp);
        return resp.data;
    }

    async sendAmbassadorForm(form){
        const headers = authHeader();
        headers['Content-Type'] = `multipart/form-data`;
        console.log(headers);
        const resp = await axios.post(R.endpoint.sendAmbassadorForm(), form, {headers: headers });
        console.log(resp);
        return resp.data;
    }
};