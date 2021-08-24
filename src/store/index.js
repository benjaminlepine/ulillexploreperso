import Vue from 'vue';
import Vuex from 'vuex';

import { header } from './modules/header.module';
import { auth } from './modules/auth.module';
import { user } from './modules/user.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        header,
        auth,
        user,
    }, 
    //strict: debug,
});