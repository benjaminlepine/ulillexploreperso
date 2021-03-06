import Vue from "vue";
import Vuex from "vuex";

import UserService from '@/services/user.service';
import userService from "../../services/user.service";

Vue.use(Vuex);

const godfather = JSON.parse(localStorage.getItem('godfatherProfile')),
    godchild = JSON.parse(localStorage.getItem('godchildProfile')),
    ambassador = JSON.parse(localStorage.getItem('ambassadorProfile'));

export const user = {
    namespaced: true,
    state: {
        godfatherProfile: godfather ? godfather : null,
        godchildProfile: godchild ? godchild: null,
        ambassadorProfile: ambassador ? ambassador : null
    },
    actions:{
        fetchGodfatherProfile({ commit }){
            commit('auth/SET_LOADING', true, { root: true });
            return UserService.fetchGodfatherProfile().then(
                godfatherProfile => {
                    commit('RECEIVE_FETCH_GODFATHER_PROFILE_SUCCESS', godfatherProfile);
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(godfatherProfile);
                },
                err => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        fetchGodchildProfile({ commit }){
            commit('auth/SET_LOADING', true, { root: true });
            return UserService.fetchGodchildProfile().then(
                godchildProfile => {
                    commit('RECEIVE_FETCH_GODCHILD_PROFILE_SUCCESS', godchildProfile);
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(godchildProfile);
                },
                err => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        fetchAmbassadorProfile({ commit }){
            commit('auth/SET_LOADING', true, { root: true });
            return UserService.fetchAmbassadorProfile().then(
                profile => {
                    commit('RECEIVE_FETCH_AMBASSADOR_PROFILE_SUCCESS', profile);
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(profile);
                },
                err => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        sendAmbassadorForm({ commit}, form){
            commit('auth/SET_LOADING', true, { root: true });
            return UserService.sendAmbassadorForm(form).then(
                profile => {
                    commit('RECEIVE_SEND_AMBASSADOR_FORM_SUCCESS', profile);
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(profile);
                },
                err => {
                    commit('RECEIVE_SEND_AMBASSADOR_FORM_ERROR');
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        subscribeToAmbassador({ commit }){
            commit('auth/SET_LOADING', true, { root: true });
            commit('REQUEST_SUBSCRIBE_TO_AMBASSADOR');
            return UserService.subscribeToAmbassador().then(
                profile => {
                    commit('RECEIVE_SUBSCRIBE_TO_AMBASSADOR_SUCCESS', profile);
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(profile);
                },
                err => {
                    commit('RECEIVE_SUBSCRIBE_TO_AMBASSADOR_ERROR');
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        createGodfatherProfile({commit}, godfatherProfile){
            commit('auth/SET_LOADING', true, { root: true });
            commit('CREATE_GODFATHER_PROFILE');
            return UserService.createGodfatherProfile(godfatherProfile).then(
                profile => {
                    commit('RECEIVE_GODFATHER_PROFILE_SUCCESS', profile);
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(profile);
                },
                err => {
                    commit('RECEIVE_GODFATHER_PROFILE_ERROR');
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        createGodchildProfile({commit}, godchildProfile){
            commit('auth/SET_LOADING', true, { root: true });
            commit('CREATE_GODCHILD_PROFILE');
            return UserService.createGodchildProfile(godchildProfile).then(
                profile => {
                    commit('RECEIVE_GODCHILD_PROFILE_SUCCESS', profile);
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(profile);
                },
                err => {
                    commit('RECEIVE_GODCHILD_PROFILE_ERROR');
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        fetchHobbiesAndActivities({commit, rootGetters }){
            commit('auth/SET_LOADING', true, { root: true });
            const lang = rootGetters['header/language'];
            commit('REQUEST_HOBBIES_AND_ACTIVITIES');
            return UserService.fetchHobbiesAndActivities(lang).then(
                data => {
                    commit('RECEIVE_HOBBIES_AND_ACTIVITIES_SUCCESS', data);
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(data);
                },
                err => {
                    commit('RECEIVE_HOBBIES_AND_ACTIVITIES_ERROR');
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        fetchFaculties({commit}){
            commit('auth/SET_LOADING', true, { root: true });
            commit('REQUEST_FACULTIES');
            return userService.fetchFaculties().then(
                faculties => {
                    commit('RECEIVE_FACULTIES_SUCCESS');
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(faculties);
                },
                err => {
                    commit('RECEIVE_FACULTIES_ERROR');
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        updateGodfatherStatus({commit, rootGetters}, active){
            commit('auth/SET_LOADING', true, { root: true });
            active.en = rootGetters['header/isEn'];
            return UserService.updateGodfatherStatus(active).then(
                message => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(message);
                },
                err => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        updateGodchildStatus({commit, rootGetters}, active){
            commit('auth/SET_LOADING', true, { root: true });
            active.en = rootGetters['header/isEn'];
            return UserService.updateGodchildStatus(active).then(
                message => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(message);
                },
                err => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        deleteGodfatherMatchWithGodchild({commit, rootGetters}, payload){
            commit('auth/SET_LOADING', true, { root: true });
            payload.en = rootGetters['header/isEn'];
            return UserService.deleteGodfatherMatchWithGodchild(payload).then(
                message => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(message);
                },
                err => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
        deleteGodchildMatchWithGodfather({commit, rootGetters}, payload){
            commit('auth/SET_LOADING', true, { root: true });
            payload.en = rootGetters['header/isEn'];
            return UserService.deleteGodchildMatchWithGodfather(payload).then(
                message => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.resolve(message);
                },
                err => {
                    commit('auth/SET_LOADING', false, { root: true });
                    return Promise.reject(err);
                }
            );
        },
    },
    mutations:{
        RECEIVE_FETCH_GODFATHER_PROFILE_SUCCESS(state, godfather){
            state.godfatherProfile = godfather;
            localStorage.setItem('godfatherProfile', JSON.stringify(state.godfatherProfile));
        },
        RECEIVE_FETCH_GODCHILD_PROFILE_SUCCESS(state, godchild){
            state.godchildProfile = godchild;
            localStorage.setItem('godchildProfile', JSON.stringify(state.godchildProfile));
        },
        RECEIVE_FETCH_AMBASSADOR_PROFILE_SUCCESS(state, ambassador){
            state.ambassadorProfile = ambassador;
            localStorage.setItem('ambassadorProfile', JSON.stringify(state.ambassadorProfile));
        },

        REQUEST_SEND_AMBASSADOR_FORM(state){},
        RECEIVE_SEND_AMBASSADOR_FORM_SUCCESS(state, profile){
            state.ambassadorProfile = profile;
            localStorage.setItem('ambassadorProfile', JSON.stringify(state.ambassadorProfile));
        },
        RECEIVE_SEND_AMBASSADOR_FORM_ERROR(state){},

        REQUEST_SUBSCRIBE_TO_AMBASSADOR(state){},
        RECEIVE_SUBSCRIBE_TO_AMBASSADOR_SUCCESS(state, profile){
            state.ambassadorProfile = profile;
            localStorage.setItem('ambassadorProfile', JSON.stringify(state.ambassadorProfile));
        },
        RECEIVE_SUBSCRIBE_TO_AMBASSADOR_ERROR(state){},

        CREATE_GODFATHER_PROFILE(state){},
        RECEIVE_GODFATHER_PROFILE_SUCCESS(state, profile){
            if(this.state.godfatherProfile){
                state.godfatherProfile.profile = profile;
            } else {
                state.godfatherProfile = {profile};
            }
            localStorage.setItem('godfatherProfile', JSON.stringify(state.godfatherProfile));
        },
        RECEIVE_GODFATHER_PROFIL_ERROR(state){},
        CREATE_GODCHILD_PROFILE(state){},
        RECEIVE_GODCHILD_PROFILE_SUCCESS(state, profile){
            if(this.state.godchildProfile){
                state.godchildProfile.profile = profile;
            } else {
                state.godchildProfile = {profile};
            }
            localStorage.setItem('godchildProfile', JSON.stringify(state.godchildProfile));
        },
        RECEIVE_GODCHILD_PROFILE_ERROR(state){},

        REQUEST_FACULTIES(state){},
        RECEIVE_FACULTIES_SUCCESS(state){},
        RECEIVE_FACULTIES_ERROR(state){},

        REQUEST_HOBBIES_AND_ACTIVITIES(state){},
        RECEIVE_HOBBIES_AND_ACTIVITIES_SUCCESS(state){},
        RECEIVE_HOBBIES_AND_ACTIVITIES_ERROR(state){},
    },
    getters:{
        godfatherProfile: state => {
            if (state.godfatherProfile){
                return state.godfatherProfile.profile;
            }
            return null;
        },
        godchildProfile: state => {
            if (state.godchildProfile){
                return state.godchildProfile.profile;
            }
            return null;
        },
        godfather: state => {
            if (state.godchildProfile && state.godchildProfile.godfather){
                return state.godchildProfile.godfather;
            }
            return null;
        },
        godchildren: state => {
            if (state.godfatherProfile && state.godfatherProfile.children){
                return state.godfatherProfile.children;
            }
            return null;
        },
        ambassador: state => state.ambassadorProfile,
        fullName: (state, getters, rootState, rootGetters)=>{
            const user = rootGetters['auth/user'];
            if (user){
                if (user.firstname && user.lastname){
                    return user.firstname + ' ' + user.lastname;
                }else if ( user.firstname){
                    return user.firstname;
                }else if (user.lastname){
                    return user.lastname;
                }
            }
            return "N/A"
        },
        isAmbassadorUE: (state)=>{
            if (state.ambassadorProfile){
                return  state.ambassadorProfile.isUE
            }
            return false;
        },
    }
};
