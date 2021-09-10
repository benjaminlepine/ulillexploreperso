import axios from 'axios';
import authHeader from './auth-header';
import R from '../resources';

export default new class UserService {
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
        return this.fetch(R.endpoint.hobbies(lang));
    }
    async fetchActivities(lang){
        return this.fetch(R.endpoint.activities(lang));
    }
    async fetchHobbiesAndActivities(lang){
        return this.fetch(R.endpoint.hobbiesActivities(lang));
    }

    async fetchFaculties(){
        return this.fetch(R.endpoint.faculties());
    }

    async fetch(url){
        const resp = await axios.get(url, { headers: authHeader(), withCredentials: true });
        return resp.data;
    }

    async createGodchildProfile(profile){
        const resp = await axios.post(R.endpoint.createGodchildProfile(profile.id), profile, { headers: authHeader() });
        if(resp.data){
            return resp.data;
        }
        return resp;
    }

    async createGodfatherProfile(profile){
        const resp = await axios.post(R.endpoint.createGodfatherProfile(), profile, { headers: authHeader() });
        if(resp.data){
            return resp.data;
        }
        return resp;
    }

    async subscribeToAmbassador(){
        const resp = await axios.post(R.endpoint.subscribeToAmbassador(), null, { headers: authHeader(), withCredentials: true });
        console.log(resp);
        if(resp.data){
            return resp.data;
        }
        return resp;
    }

    async sendAmbassadorForm(form){
        const headers = authHeader();
        headers['Content-Type'] = `multipart/form-data`;
        console.log(headers);
        const resp = await axios.post(R.endpoint.sendAmbassadorForm(), form, {headers: headers, withCredentials: true });
        console.log(resp);
        if(resp.data){
            return resp.data;
        }
        return resp;
    }
};
