import Vue from 'vue';
import Vuex from 'vuex';

import AuthService from '../../services/auth.service';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { status: {signIn: true, loading: false}, user} : {status: {signIn: false, loading: false}, user: null};

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    signup({ commit }, user){
      commit('REQUEST_SIGNUP');
      return AuthService
        .signup(user).then(
          resp => {
            commit('RECEIVE_SIGNUP_SUCCESS');
            return Promise.resolve(resp.data);
          },
          err => {
            commit('RECEIVE_SIGNUP_ERROR');
            return Promise.reject(err);
          }
        );
    },
    signin({ commit }, user){
      commit('REQUEST_SIGNIN')
      return AuthService
      .signin(user).then (
        user => {
          commit('RECEIVE_SIGNIN_SUCCESS', user);
          return Promise.resolve(user);
        },
        err => {
          commit('RECEIVE_SIGNIN_ERROR');
          return Promise.reject(err);
        }
      );
    },
    signout({ commit }){
      commit('REQUEST_SIGNOUT');
      const isUserCAS = false;
      if (isUserCAS){
        /* FIXME signout user form CAS
        return AuthService.signoutUserCAS().then(
          (resp) => {
            commit('RECEIVE_SIGNOUT_SUCCESS');
            return Promise.resolve();
          },
          (err) => {
            commit('RECEIVE_SIGNOUT_ERROR');
            return Promise.reject(err);
          }
        ); */
      }else {
        AuthService.signout();
        commit('RECEIVE_SIGNOUT_SUCCESS');
        return Promise.resolve();
      }
    },
    resetUserPassword({ commit}, email){
      commit('REQUEST_RESET_PASSWORD')
      console.log(email);
      AuthService.resetUserPassword(email).then(
        resp =>{
          commit('RECEIVE_RESET_PASSWORD_SUCCESS');
          return Promise.resolve(resp);
        },
        err => {
          commit('RECEIVE_RESET_PASSWORD_ERROR');
          return Promise.reject(err);
        }
      )
    },
    changeUserPassword({ commit }, payload){
      commit('REAQUEST_CHANGE_PASSWORD');
      AuthService.changeUserPassword(payload).then(
        resp => {
          commit('');
          return Promise.resolve(resp);
        },
        err => {
          commit('');
          return Promise.reject(err);
        }
      );
    }
  },
  mutations: {
    REQUEST_RESET_PASSWORD(state){
      state.status.loading = true;
    },
    RECEIVE_RESET_PASSWORD_SUCCESS(state){
      state.status.loading = false;
    },
    RECEIVE_RESET_PASSWORD_ERROR(state){
      state.status.loading = false;
    },

    REQUEST_CHANGE_PASSWORD(state){
      state.status.loading = true;
    },
    RECEIVE_CHANGE_PASSWORD_SUCCESS(state){
      state.status.loading = false;
    },
    RECEIVE_CHANGE_PASSWORD_ERROR(state){
      state.status.loading = false;
    },

    REQUEST_SIGNUP(state){
      state.status.loading = true;
    },
    RECEIVE_SIGNUP_SUCCESS(state){
      state.status.signIn = false;
      state.status.loading = false;
    },
    RECEIVE_SIGNUP_ERROR(state){
      state.status.signIn = false;
      state.status.loading = false;
    },

    REQUEST_SIGNIN(state){
      state.status.loading = true;
    },
    RECEIVE_SIGNIN_SUCCESS(state, user){
      state.status.signIn = true;
      state.user = user;
      state.status.loading = false;
    },
    RECEIVE_SIGNIN_ERROR(state){
      state.status.signIn = false;
      state.user = null;
      state.status.loading = false;
    },

    REQUEST_SIGNOUT(state){
      state.status.loading = true;
    },
    RECEIVE_SIGNOUT_SUCCESS(state){
      state.status.signIn = false;
      state.user = null;
      state.status.loading = false;
    },
    RECEIVE_SIGNOUT_ERROR(state){
      state.status.loading = false;
    }
  },
  getters: {
    loading: state => state.status.loading,
    signIn: state => state.status.signIn,
  }
};