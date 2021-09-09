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
      console.log("in dispatch ", user);
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
    signin({ commit, dispatch }, user){
      commit('REQUEST_SIGNIN')
      return AuthService
      .signin(user).then (
        user => {
          commit('RECEIVE_SIGNIN_SUCCESS', user);
   /*       dispatch('user/fetchGodfatherProfile', {} , {root:true});
          dispatch('user/fetchGodchildProfile', {} , {root:true});
          dispatch('user/fetchAmbassadorProfile', {} , {root:true}); */
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
    forgotPassword({ commit, rootGetters }, email){
      commit('REQUEST_PASSWORD_FORGOT')
      console.log(email);
      const lang = rootGetters['header/language'];
      console.log(lang);
      AuthService.forgotPassword(lang, email).then(
        resp =>{

          commit('RECEIVE_PASSWORD_FORGOT_SUCCESS');
          return Promise.resolve(resp);
        },
        err => {
          commit('RECEIVE_PASSWORD_FORGOT_ERROR');
          return Promise.reject(err);
        }
      )
    },
    resetPassword({ commit }, form){
      commit('REQUEST_RESET_PASSWORD');
      AuthService.resetPassword(form).then(
        resp => {
          commit('RECEIVE_RESET_PASSWORD_SUCCESS');
          return Promise.resolve(resp);
        },
        err => {
          commit('RECEIVE_RESET_PASSWORD_ERROR');
          return Promise.reject(err);
        }
      );
    }
  },
  mutations: {
    REQUEST_PASSWORD_FORGOT(state){
      state.status.loading = true;
    },
    RECEIVE_PASSWORD_FORGOT_SUCCESS(state){
      state.status.loading = false;
    },
    RECEIVE_PASSWORD_FORGOT_ERROR(state){
      state.status.loading = false;
    },

    REQUEST_RESET_PASSWORD(state){
      state.status.loading = true;
    },
    RECEIVE_RESET_PASSWORD_SUCCESS(state){
      state.status.loading = false;
    },
    RECEIVE_RESET_PASSWORD_ERROR(state){
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
    user: state => state.user,
    isAuth: (state)=> !!state.user,
  }
};
