import Vuex from 'vuex';
import Vue from 'vue';
import data from '../api/data';

Vue.use(Vuex);


export default new Vuex.Store({
  state: { // date
    students: [],
    teamA: [],
    teamB: [],
  },
  getters: { // computed properties

  },
  actions: { // methods
    getStudents(context) {
      context.commit('setStudents');
    },
    addTeamMember(context, data) {
      console.log(data);
    },

  },
  mutations: { // Used for changing the state
    setStudents(state) {
      state.students = data.getStudents();
    },
  },

});
