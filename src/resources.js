const R = {
    endpoint: {
        base: process.env.VUE_APP_API_ENDPOINT,
        //godfatherSummary(){ return R.endpoint.base+'/api/ulillexplore/godfather/summary/{pageNo}/{pageSize}'; },
        //godfatherSummary(){ return R.endpoint.base+'/api/ulillexplore/godfather/summary/0/5'; },
        //godfatherDetails(){ return R.endpoint.base+'/api/ulillexplore/godfather/{id}'; },
        //godchildSummary(){ return R.endpoint.base+'/api/ulillexplore/godchild/summary/{pageNo}/{pageSize}'; },
        //godchildDetails(){ return R.endpoint.base+'/api/ulillexplore/godchild/{id}'; },
        signup(){ return R.endpoint.base+'/api/auth/signup'; },
        signin(){ return R.endpoint.base+'/api/auth/signin'; },
        resetUserPassword(){ return R.endpoint.base+'/api/auth/reset-password'; },
        changeUserPassword(){ return R.endpoint.base+'/api/auth/change-password'; },
        hobbies(lang){
            return R.endpoint.base+'/api/ulillexplore/hobbies/'+lang;
        },
        activities(lang){
            return R.endpoint.base+'/api/ulillexplore/activities/'+lang;
        },
        hobbiesActivities(lang){
            return R.endpoint.base+'/api/ulillexplore/hobbies-activities/'+lang;
        },
    }
};
export default R;
