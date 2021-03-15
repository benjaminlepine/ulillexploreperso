const R = {
    endpoint: {
        base: "http://176.132.208.146:9595",
        //godfatherSummary(){ return R.endpoint.base+'/api/ulillexplore/godfather/summary/{pageNo}/{pageSize}'; },
        //godfatherSummary(){ return R.endpoint.base+'/api/ulillexplore/godfather/summary/0/5'; },
        //godfatherDetails(){ return R.endpoint.base+'/api/ulillexplore/godfather/{id}'; },
        //godchildSummary(){ return R.endpoint.base+'/api/ulillexplore/godchild/summary/{pageNo}/{pageSize}'; },
        //godchildDetails(){ return R.endpoint.base+'/api/ulillexplore/godchild/{id}'; },
        signup(){ return R.endpoint.base+'/api/auth/signup'; },
        signin(){ return R.endpoint.base+'/api/auth/signin'; },
        resetPassword(){ return R.endpoint.base+'/api/auth/resetPassword'; },
        hobbiesActivities(){ return R.endpoint.base+'/api/ulillexplore/hobbies-activities/fr'; },
    }
};
export default R;
