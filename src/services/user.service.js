import axios from 'axios';
import authHeader from './auth-header';
import R from '../resources';

export default new class UserService {
    async fetchProfile(){
        const resp = await axios.get();
        return resp.data;
    }
    async fetchHobbies(lang){
        const resp = await axios.get(R.endpoint.hobbies(lang));
        return resp.data;
    }
    async fetchActivities(lang){
        const resp = await axios.get(R.endpoint.activities(lang));
        return resp.data;
    }
    async fetchHobbiesAndActivities(lang){
        const resp = await axios.get(R.endpoint.hobbiesActivities(lang));
        return resp.data;
    }
};