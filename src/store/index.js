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
      context.commit('pushMemberToTeam', data);
    },

  },
  mutations: { // Used for changing the state
    setStudents(state) {
      state.students = data.getStudents();
    },
    pushMemberToTeam(state, data) {
      if (data.type === 'A') {
        state.teamA.push(state.students[data.index]);
      } else {
        state.teamB.push(state.students[data.index]);
      }
    },
  },

});
