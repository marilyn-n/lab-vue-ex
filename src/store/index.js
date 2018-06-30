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

  actions: { // methods click events
    getStudents(context) {
      context.commit('setStudents');
    },

    addTeamMember(context, data) {
      context.commit('pushMemberToTeam', data);
      context.commit('enableSelectedState', data.index);
    },

    removeFromTeam(context, data) {
      context.commit('disableSelectedState', data);
      context.commit('spliceFromTeam', data);

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

    enableSelectedState(state, index) {
      state.students[index].selected = true;
    },

    disableSelectedState(state, index) {
      state.students[index].selected = false;
    },

    spliceFromTeam() {
      if (data.type === 'A') {
        state.teamA.splice(data.index, 1);
      } else {
        state.teamB.splice(data.index, 1);
      }
    },

  },

});
