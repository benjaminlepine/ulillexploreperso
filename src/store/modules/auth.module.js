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
    signup({ commit, rootGetters }, user){
      commit('SET_LOADING', true);
      user.en = rootGetters['header/isEn'];
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
    signin({ commit, rootGetters }, user){
      commit('SET_LOADING', true);
      user.en = rootGetters['header/isEn'];
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
    signout({ commit, state }){
      commit('SET_LOADING', true);
      // FIXME signout
      AuthService.signout();
      commit('RECEIVE_SIGNOUT_SUCCESS');
      return Promise.resolve();
    },
    forgotPassword({ commit, rootGetters }, email){
      commit('SET_LOADING', true);
      const playload = {email, en: rootGetters['header/isEn']};
      return AuthService.forgotPassword(playload).then(
        data =>{
          commit('SET_LOADING', false);
          return Promise.resolve(data);
        },
        err => {
          commit('SET_LOADING', false);
          return Promise.reject(err);
        }
      )
    },
    resetPassword({ commit, rootGetters }, form){
      commit('SET_LOADING', true);
      form.en = rootGetters['header/isEn'];
      return AuthService.resetPassword(form).then(
        resp => {
          commit('SET_LOADING', false);
          return Promise.resolve(resp);
        },
        err => {
          commit('SET_LOADING', false);
          return Promise.reject(err);
        }
      );
    },
    extendToken({ commit, rootGetters }, mobile){
      const d = { token: user.token, mobile, en: rootGetters['header/isEn'] };
      console.log(d);
      // TODO extend token for web app mobile == false
    }
  },
  mutations: {
    SET_LOADING(state, loading){
      state.status.loading = loading;
    },
    RECEIVE_SIGNUP_SUCCESS(state){
      state.status.signIn = false;
      state.status.loading = false;
    },
    RECEIVE_SIGNUP_ERROR(state){
      state.status.signIn = false;
      state.status.loading = false;
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
    RECEIVE_SIGNOUT_SUCCESS(state){
      state.status.signIn = false;
      state.user = null;
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
