import axios from 'axios';
import authHeader from './auth-header';
import R from '../resources';

export default new class UserService {
    async fetchProfile(){
        const resp = await axios.get();
        return resp.data;
    }
    async fetchGodfatherProfile(){
        return this.fetch(R.endpoint.fethGodfatherProfile());
    }
    async fetchGodchildProfile(){
        return this.fetch(R.endpoint.fetchGodchildProfile());
    }
    async fetchAmbassadorProfile(){
        return this.fetch(R.endpoint.fetchAmbassadorProfile());
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

    async fetch(url){
        const resp = await axios.get(url, { headers: authHeader() });
        return resp.data;
    }

    async createGodchildProfile(profile){
        const resp = await axios.post(R.endpoint.createGodchildProfile(), profile, { headers: authHeader() });
        return resp.data;
    }

    async createGodfatherProfile(profile){
        const resp = await axios.post(R.endpoint.createGodfatherProfile(), profile, { headers: authHeader() });
        return resp.data;
    }

    async subscribeToAmbassador(){
        const resp = await axios.post(R.endpoint.subscribeToAmbassador(), null, { headers: authHeader() });
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
