import Vuex from 'vuex';
import Vue from 'vue';
import state from '../store/state';
import actions from '../store/actions';
import mutations from '../store/mutations';

Vue.use(Vuex);


export default new Vuex.Store({
  state,
  getters: { // computed properties
    studentCount(state, getters) {
      return state.students.length;
    },
  },
  actions,
  mutations,

});
