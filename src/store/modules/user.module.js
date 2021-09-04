import Vue from "vue";
import Vuex from "vuex";

import UserService from '@/services/user.service';
import userService from "../../services/user.service";

Vue.use(Vuex);

export const user = {
    namespaced: true,
    state: { godchildProfile: null, godfatherProfile: null, ambassadorProfile: null},
    actions:{
        sendAmbassadorForm({ commit, rootGetters}, form){
            return UserService.sendAmbassadorForm(form).then(
                profile => {
                    commit('RECEIVE_SEND_AMBASSADOR_FORM_SUCCESS', profile);
                    return Promise.resolve(profile);
                },
                err => {
                    commit('RECEIVE_SEND_AMBASSADOR_FORM_ERROR');
                    return Promise.reject(err);
                }
            );
        },
        subscribeToAmbassador({ commit }){
            commit('REQUEST_SUBSCRIBE_TO_AMBASSADOR');
            return UserService.subscribeToAmbassador().then(
                profile => {
                    commit('RECEIVE_SUBSCRIBE_TO_AMBASSADOR_SUCCESS', profile);
                    return Promise.resolve(profile);
                },
                err => {
                    commit('RECEIVE_SUBSCRIBE_TO_AMBASSADOR_ERROR');
                    return Promise.reject(err);
                }
            );
        },
        createGodfatherProfile({commit}, godfatherProfile){
            commit('CREATE_GODFATHER_PROFILE');
            return UserService.createGodfatherProfil(godfatherProfile).then(
                profile => {
                    commit('RECEIVE_GODFATHER_PROFILE_SUCCESS', profile);
                    return Promise.resolve(profile);
                },
                err => {
                    commit('RECEIVE_GODFATHER_PROFILE_ERROR');
                    return Promise.reject(err);
                }
            );
        },
        createGodchildProfile({commit}, godchildProfile){
            commit('CREATE_GODCHILD_PROFILE');
            return UserService.createGodchildProfile(godchildProfile).then(
                profile => {
                    commit('RECEIVE_GODCHILD_PROFILE_SUCCESS', profile);
                    return Promise.resolve(profile);
                },
                err => {
                    commit('RECEIVE_GODCHILD_PROFILE_ERROR');
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
        RECEIVE_SEND_AMBASSADOR_FORM_SUCCESS(state, profile){ state.ambassadorProfile = profile; },
        RECEIVE_SEND_AMBASSADOR_FORM_ERROR(state){},

        REQUEST_SUBSCRIBE_TO_AMBASSADOR(state){},
        RECEIVE_SUBSCRIBE_TO_AMBASSADOR_SUCCESS(state, profile){ state.ambassadorProfile = profile; },
        RECEIVE_SUBSCRIBE_TO_AMBASSADOR_ERROR(state){},

        CREATE_GODFATHER_PROFILE(state){},
        RECEIVE_GODFATHER_PROFILE_SUCCESS(state, profile){ state.godfatherProfile = profile; },
        RECEIVE_GODFATHER_PROFIL_ERROR(state){},

        CREATE_GODCHILD_PROFILE(state){},
        RECEIVE_GODCHILD_PROFILE_SUCCESS(state, profile){ state.godchildProfile = profile; },
        RECEIVE_GODCHILD_PROFILE_ERROR(state){},

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
