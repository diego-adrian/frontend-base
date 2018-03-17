'use strict';

import Vuex from 'vuex';
import Vue from 'vue';

import layout from './modules/layout';

import modal from '@/common/plugins/modal/mixins/modal';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    main: true,
    time: null,
    sessionInterval: null,
    auth: false,
    menu: {},
    user: {},
    permissions: {},
    rol: '',
    sidenav: false,
    state403: false,
    modal: false,
    modal2: false,
    modal3: false,
    alert: {
      show: false,
      text: '',
      callback: null
    },
    confirm: {
      show: false,
      text: '',
      callbackOk: null,
      callbackCancel: null,
      textOk: '',
      textCancel: ''
    }
  },
  mutations: {
    setMain (state, value) {
      state.main = value;
    },
    setUser (state, value) {
      state.user = value;
    },
    setMenu (state, value) {
      state.menu = value;
    },
    setAuth (state, value) {
      state.auth = value;
    },
    setSidenav (state, value) {
      state.sidenav = value;
    },
    setPermissions (state, value) {
      state.permissions = value;
    },
    openModal (state, id = '') {
      state[`modal${id}`] = true;
    },
    closeModal (state, id = '') {
      state[`modal${id}`] = false;
    },
    setDefault (state) {
      state.auth = false;
      state.menu = {};
      state.user = {};
      state.permissions = {};
      state.rol = '';
      state.layout.breadcrumbs = {};
      state.modal = false;
      state.modal2 = false;
      state.modal3 = false;
      state.state403 = false;
      state.alert.show = false;
      state.confirm.show = false;
      document.removeEventListener('keydown', modal.methods.bloquear, false);
    },
    CLOSE_ALERT (state) {
      state.alert.show = false;
      document.removeEventListener('keydown', modal.methods.bloquear, false);
    },
    CLOSE_CONFIRM (state) {
      state.confirm.show = false;
      document.removeEventListener('keydown', modal.methods.bloquear, false);
    },
    SET_TIME (state, value) {
      state.time = value;
    },
    TIME_DECREASE (state) {
      state.time -= 15;
    }
  },
  modules: {
    layout
  }
});
