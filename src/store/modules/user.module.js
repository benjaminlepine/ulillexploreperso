import Vue from "vue";
import Vuex from "vuex";

import UserService from '@/services/user.service';
import userService from "../../services/user.service";

Vue.use(Vuex);

export const user = {
    namespaced: true,
    state: {godchildProfil: null},
    actions:{
        createGodchildProfil({}, godchildProfil){
            return UserService.createGodchildProfil(godchildProfil).then(
                profil => {
                    //commit('RECEIVE_GODCHILD_PROFIL_SUCCESS', profil);
                    console.log("===> ", profil);
                    return Promise.resolve(profil);
                },
                err => {
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
            )
        },
    },
    mutations:{
        REQUEST_GODCHILD_PROFIL(state){},
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
    getters:{}
};