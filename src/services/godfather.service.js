import axios from "axios";
import authHeader from "./auth-header";

export default new class GodfatherService {
    getGodfatherSummary(){
        //console.log("getGodfatherSummary WORKS")
        const resp = await axios.get(R.endpoint.godfatherSummary());

        return resp.data;
    }
}