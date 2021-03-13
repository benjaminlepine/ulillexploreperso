import Vue from "vue";
import Vuex from 'vuex'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isNavOpen: false,
        lang: 'fr',
    },
    mutations: {
        setIsNavOpen(yesno) {
            this.state.isNavOpen = yesno;
        },
        toggleNav() {ma
            this.state.isNavOpen = !this.state.isNavOpen;
        },
        // setShowLogin(state, showLogin){
        //     state.showLogin = showLogin;
        // },
        setLanguage(state, lang){
            state.lang = lang;
        },
        // setUser(){
        //     const username = localStorage.getItem('username');
        //     if (username && username.length > 0){
        //         this.state.authentication.username = username;
        //         this.state.authentication.signIn = true;
        //
        //     }else {
        //         this.state.authentication.username = "";
        //         this.state.authentication.signIn = false;
        //     }
        // },
        // setAuthentication(){
        //     this.state.authentication.signIn = !this.state.authentication.signIn;
        // }
    },
    getters: {},
    actions: {},
    strict: true
})
