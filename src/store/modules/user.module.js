import Vue from "vue";
import Vuex from "vuex";

import UserService from '@/services/user.service';
import userService from "../../services/user.service";

Vue.use(Vuex);

export const user = {
    namespaced: true,
    state: {},
    actions:{
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
        REQUEST_FACULTIES(state){},
        RECEIVE_FACULTIES_SUCCESS(state){},
        RECEIVE_FACULTIES_ERROR(state){},
        
        REQUEST_HOBBIES_AND_ACTIVITIES(state){},
        RECEIVE_HOBBIES_AND_ACTIVITIES_SUCCESS(state){},
        RECEIVE_HOBBIES_AND_ACTIVITIES_ERROR(state){},
    },
    getters:{}
};