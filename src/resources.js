const R = {
    endpoint: {
        base: process.env.VUE_APP_API_ENDPOINT,
        //base:"http://176.132.208.146:9595",
        signup(){ return R.endpoint.base+'/api/auth/signup'; },
        signin(){ return R.endpoint.base+'/api/auth/signin'; },
        signout(){ return R.endpoint.base+'/api/auth/signout'; },
        forgotPassword(){ return R.endpoint.base+'/api/auth/forgot-password/'; },
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
        createGodchildProfile(){ return R.endpoint.base+'/api/ulillexplore/godchild/profile/'; },
        activateGodchildProfile(activate){ return R.endpoint.base+'/api/ulillexplore/godchild/profile/state/'+activate; },

        createGodfatherProfile(){ return R.endpoint.base+'/api/ulillexplore/godfather/profile/'; },
        activateGodchilProfile(activate){ return R.endpoint.base+'/api/ulillexplore/godfather/profile/state/'+activate; },

        subscribeToAmbassador(){ return R.endpoint.base+"/api/ulillexplore/ambassador/subscribe/"; },
        sendAmbassadorForm(){ return R.endpoint.base+"/api/ulillexplore/ambassador/submit/"; },
        
        fethGodfatherProfile(){ return R.endpoint.base+"/api/ulillexplore/godfather/profile"; },
        fetchGodchildProfile(){ return R.endpoint.base+"/api/ulillexplore/godchild/profile"; },
        fetchAmbassadorProfile(){ return R.endpoint.base+"/api/ulillexplore/ambassador"; },
        
        updateGodchildStatus(){ return R.endpoint.base+"/api/ulillexplore/godchild/profile/activate"; },
        updateGodfatherStatus(){ return R.endpoint.base+"/api/ulillexplore/godfather/profile/activate"; },

        deleteGodfatherMatchWithGodchild(){ return R.endpoint.base+"/api/ulillexplore/match/godfather/delete-match"; },
        deleteGodchildMatchWithGodfather(){ return R.endpoint.base+"/api/ulillexplore/match/godchild/delete-match"; },
    }
};
export default R;
