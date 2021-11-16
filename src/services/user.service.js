import axios from 'axios';
import authHeader from './auth-header';
import R from '../resources';
import AuthService from './auth.service';

export default new class UserService {
    constructor(){
        this.http = axios.create();
        
        this.http.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401){
                AuthService.signout();
            }
            return Promise.reject(error);
        });
          
    }
    async fetch(url){
        const resp = await this.http.get(url, { headers: authHeader() });
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

    async post(url, data){
        const resp = await this.http.post(url, data, { headers: authHeader()});
        return resp.data;
    }
    async createGodchildProfile(profile){
        return this.post(R.endpoint.createGodchildProfile(), profile);
    }
    async activateGodchildProfile(activate){
        return this.post(R.endpoint.activateGodchilProfile(activate), null);
    }
    async createGodfatherProfile(profile){
        return this.post(R.endpoint.createGodfatherProfile(), profile);
    }
    async activateGodfatherProfile(activate){
        return this.post(R.endpoint.activateGodfatherProfile(activate), null);
    }
    async subscribeToAmbassador(){
        return this.post(R.endpoint.subscribeToAmbassador(), null);
    }

    async sendAmbassadorForm(form){
        const headers = authHeader();
        headers['Content-Type'] = `multipart/form-data`;
        console.log(headers);
        const resp = await this.http.post(R.endpoint.sendAmbassadorForm(), form, { headers: headers });
        console.log(resp);
        return resp.data;
    }

    async updateGodchildStatus(active){
        return this.post(R.endpoint.updateGodchildStatus(), active)
    }
    async updateGodfatherStatus(active){
        return this.post(R.endpoint.updateGodfatherStatus(), active)
    }
    async deleteGodfatherMatchWithGodchild(payload){
        const resp = await this.http.post(R.endpoint.deleteGodfatherMatchWithGodchild(), payload, { headers: authHeader() });
        console.log(resp);
        return resp.data;
    }
    async deleteGodchildMatchWithGodfather(payload){
        const resp = await this.http.post(R.endpoint.deleteGodchildMatchWithGodfather(), payload, { headers: authHeader() });
        console.log(resp);
        return resp.data;
    }
};
