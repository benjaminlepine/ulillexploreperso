import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const lang = localStorage.getItem('lang');
const initialState = { isNavOpen: false, lang: (lang ? lang : 'fr') };

export const header = {
    namespaced: true,
    state: initialState,
    actions: {},
    mutations: {
        setIsNavOpen(state, yesno) {
            state.isNavOpen = yesno;
        },
        toggleNav(state) {
            state.isNavOpen = !this.state.isNavOpen;
        },
        setLanguage(state, lang){
            state.lang = lang;
            localStorage.setItem('lang', lang);
        },
    },
    getters: {
        isNavOpen: state => state.isNavOpen,
        language: state => state.lang,
    }
};