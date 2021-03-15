import axios from 'axios';
import R from '../resources';
import store from '../store';

export default class ApiServices {
    constructor(){
        this.$http = axios;
        this.store = store;
    }
    getGodfatherSummary(){
        //console.log("getGodfatherSummary WORKS")
        this.$http.get(R.endpoint.godfatherSummary())
            .then(response => {
                if (response.data){
                    console.log("response.data = ", response.data);
                    //localStorage.setItem("godfatherSummary", JSON.stringify(response.data));
                }
            }).catch(error => {});
    }
    signup(firstname, lastname, email, password){
        this.$http.post(R.endpoint.signup(), {firstname:firstname, lastname:lastname, email:email , password:password})
            .then(response => {
                if (response.data){
                    console.log("response.data = ", response.data);
                    //localStorage.setItem("godfatherSummary", JSON.stringify(response.data));
                }
            }).catch(error => {});
    }

    signin(email, password){
        this.$http.post(R.endpoint.signup(), {email: email, password: password})
            .then(response => {
                if (response.data){
                    console.log("response.data = ", response.data);
                }
            }).catch(error => {});
    }

    resetPassword(email){
        this.$http.post(R.endpoint.resetPassword(), {email: email})
            .then(response => {
                if (response.data){
                    console.log("response.data = ", response.data);
                }
            }).catch(error => {});
    }

    hobbiesActivities(){
        console.log("hobbiesActivities WORKS");
        this.$http.get(R.endpoint.hobbiesActivities())
            .then(response => {
                if (response.data){
                    console.log("response.data = ", response.data);
                    //localStorage.setItem("godfatherSummary", JSON.stringify(response.data));
                }
            }).catch(error => {});
    }


}
