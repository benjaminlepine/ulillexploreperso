import Vue from "vue";
import Vuex from "vuex";

import UserService from '@/services/user.service';

Vue.use(Vuex);

export const user = {
    namespaced: true,
    state: {},
    actions:{
        fetchHobbiesAndActivities({commit, rootGetters }){
            const lang = rootGetters['header/language'];
            commit('REQUEST_HOBBIES_AND_ACTIVITIES');
            return UserService.fetchHobbiesAndActivities(lang).then(
                (data) => {
                    commit('RECEIVE_HOBBIES_AND_ACTIVITIES_SUCCESS', data);
                    return Promise.resolve(data);
                },
                err => {
                    commit('RECEIVE_HOBBIES_AND_ACTIVITIES_ERROR');
                    return Promise.reject(err);
                }
            );
        },
    },
    mutations:{
        REQUEST_HOBBIES_AND_ACTIVITIES(state){},
        RECEIVE_HOBBIES_AND_ACTIVITIES_SUCCESS(state){},
        RECEIVE_HOBBIES_AND_ACTIVITIES_ERROR(state){},
    },
    getters:{}
};