import Vue from "vue";
import Vuex from "vuex";

import UserService from '@/services/user.service';
import userService from "../../services/user.service";

Vue.use(Vuex);

export const user = {
    namespaced: true,
    state: { godchildProfil: null, godfatherProfil: null },
    actions:{
        sendAmbassadorForm({ commit, rootGetters}, form){
            return UserService.sendAmbassadorForm(form).then(
                resp => {
                    commit('RECEIVE_SEND_AMBASSADOR_FORM_SUCCESS');
                    return Promise.resolve(resp);
                },
                err => {
                    commit('RECEIVE_SEND_AMBASSADOR_FORM_ERROR');
                    return Promise.reject(err);
                }
            );
        },
        subscribeToAmbassador({ commit }, isUE){
            commit('REQUEST_SUBSCRIBE_TO_AMBASSADOR');
            return UserService.subscribeToAmbassador(isUE).then(
                message => {
                    commit('RECEIVE_SUBSCRIBE_TO_AMBASSADOR_SUCCESS');
                    return Promise.resolve(message);
                },
                err => {
                    commit('RECEIVE_SUBSCRIBE_TO_AMBASSADOR_ERROR');
                    return Promise.reject(err);
                }
            );
        },
        createGodfatherProfil({commit}, godfatherProfil){
            commit('CREATE_GODFATHER_PROFIL');
            return UserService.createGodfatherProfil(godfatherProfil).then(
                profil => {
                    commit('RECEIVE_GODFATHER_PROFIL_SUCCESS', profil);
                    return Promise.resolve(profil);
                },
                err => {
                    commit('RECEIVE_GODFATHER_PROFIL_ERROR');
                    return Promise.reject(err);
                }
            );
        },
        createGodchildProfil({commit}, godchildProfil){
            commit('CREATE_GODCHILD_PROFIL');
            return UserService.createGodchildProfil(godchildProfil).then(
                profil => {
                    commit('RECEIVE_GODCHILD_PROFIL_SUCCESS', profil);
                    return Promise.resolve(profil);
                },
                err => {
                    commit('RECEIVE_GODCHILD_PROFIL_ERROR');
                    return Promise.reject(err);
                }
            );
        },
        fetchHobbiesAndActivities({commit, rootGetters }){
            const lang = rootGetters['header/language'];
            commit('REQUEST_HOBBIES_AND_ACTIVITIES');
            return UserService.fetchHobbiesAndActivities(lang).then(
                data => {
                    commit('RECEIVE_HOBBIES_AND_ACTIVITIES_SUCCESS', data);
                    return Promise.resolve(data);
                },
                err => {
                    commit('RECEIVE_HOBBIES_AND_ACTIVITIES_ERROR');
                    return Promise.reject(err);
                }
            );
        },
        fetchFaculties({commit}){
            commit('REQUEST_FACULTIES');
            return userService.fetchFaculties().then(
                faculties => {
                    commit('RECEIVE_FACULTIES_SUCCESS')
                    return Promise.resolve(faculties);
                },
                err => {
                    commit('RECEIVE_FACULTIES_ERROR');
                    return Promise.reject(err);
                }
            );
        },
    },
    mutations:{
        REQUEST_SEND_AMBASSADOR_FORM(state){},
        RECEIVE_SEND_AMBASSADOR_FORM_SUCCESS(state){},
        RECEIVE_SEND_AMBASSADOR_FORM_ERROR(state){},

        REQUEST_SUBSCRIBE_TO_AMBASSADOR(state){},
        RECEIVE_SUBSCRIBE_TO_AMBASSADOR_SUCCESS(state){},
        RECEIVE_SUBSCRIBE_TO_AMBASSADOR_ERROR(state){},

        CREATE_GODFATHER_PROFIL(state){},
        RECEIVE_GODFATHER_PROFIL_SUCCESS(state, godfatherProfil){
            state.godfatherProfil = godfatherProfil;
        },
        RECEIVE_GODFATHER_PROFIL_ERROR(state){},

        CREATE_GODCHILD_PROFIL(state){},
        RECEIVE_GODCHILD_PROFIL_SUCCESS(state, godchildProfil){
            state.godchildProfil = godchildProfil;
        },
        RECEIVE_GODCHILD_PROFIL_ERROR(state){},

        REQUEST_FACULTIES(state){},
        RECEIVE_FACULTIES_SUCCESS(state){},
        RECEIVE_FACULTIES_ERROR(state){},

        REQUEST_HOBBIES_AND_ACTIVITIES(state){},
        RECEIVE_HOBBIES_AND_ACTIVITIES_SUCCESS(state){},
        RECEIVE_HOBBIES_AND_ACTIVITIES_ERROR(state){},
    },
    getters:{
        fullName: (state, getters, rootState, rootGetters)=>{
            const user = rootGetters['auth/user'];
            if (user){
                console.log("user = ", user);
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
        isAmbassadorUE: (state, getters, rootState, rootGetters)=>{
            const user = rootGetters['auth/user'];
            if (user && user.profile && user.profile.ue){
                console.log("user = ", user);
                return user.profile.ue
            }
            return "N/A"
        },
    }
};
