const R = {
    endpoint: {
        //base: process.env.VUE_APP_API_ENDPOINT,
        // base:"http://192.168.1.193:9000",
        base:"http://176.132.208.146:9595",
        //godfatherSummary(){ return R.endpoint.base+'/api/ulillexplore/godfather/summary/{pageNo}/{pageSize}'; },
        //godfatherSummary(){ return R.endpoint.base+'/api/ulillexplore/godfather/summary/0/5'; },
        //godfatherDetails(){ return R.endpoint.base+'/api/ulillexplore/godfather/{id}'; },
        //godchildSummary(){ return R.endpoint.base+'/api/ulillexplore/godchild/summary/{pageNo}/{pageSize}'; },
        //godchildDetails(){ return R.endpoint.base+'/api/ulillexplore/godchild/{id}'; },
        casSignin() { return process.env.VUE_APP_API_ENDPOINT+'/api/login'; },
        signup(){ return R.endpoint.base+'/api/auth/signup'; },
        signin(){ return R.endpoint.base+'/api/auth/signin'; },
        forgotPassword(lang){ return R.endpoint.base+'/api/auth/forgot-password/'+lang; },
        resetPassword(){ return R.endpoint.base+'/api/auth/reset-password'; },
        faculties(){
            return R.endpoint.base+"/api/ulillexplore/faculties/";
        },
        hobbies(lang){
            return R.endpoint.base+'/api/ulillexplore/hobbies/'+lang;
        },
        activities(lang){
            return R.endpoint.base+'/api/ulillexplore/activities/'+lang;
        },
        hobbiesActivities(lang){
            return R.endpoint.base+'/api/ulillexplore/hobbies-activities/'+lang;
        },
        createGodchildProfile(id){
            return R.endpoint.base+'/api/ulillexplore/godchild/profile/'+id;
        },
        createGodfatherProfile(){
            return R.endpoint.base+'/api/ulillexplore/godfather/profile/';
        },
        subscribeToAmbassador(){
            return R.endpoint.base+"/api/ulillexplore/ambassador/subscribe/";
        },
        sendAmbassadorForm(){
            return R.endpoint.base+"/api/ulillexplore/ambassador/submit/";
        },
        fethGodfatherProfile(){ return R.endpoint.base+"/api/ulillexplore/godfather/profile"; },
        fetchGodchildProfile(){ return R.endpoint.base+"/api/ulillexplore/godchild/profile"; },
        fetchAmbassadorProfile(){ return R.endpoint.base+"/api/ulillexplore/ambassador"; }
    }
};
export default R;
