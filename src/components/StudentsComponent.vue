<template>
  <div class="hello">
    <h1>Students</h1>
    <ul>
      <li v-for="(student, index) in students" :key="student.id">
        {{student.name}} |
        <i>{{student.games.length}} Favorite Games</i>
        <button v-on:click="addTeamMember('A', index)" :disabled="student.selected" >Team A</button>
        <button v-on:click="addTeamMember('B', index)" :disabled="student.selected">Team B</button>
        <!-- {{student.selected}} -->
      </li>
    </ul> 
    <hr />
    <TeamComponent type='A'>Team A</TeamComponent>
    <TeamComponent type='B'> Team B</TeamComponent>
  </div>
</template>

<script>
import TeamComponent from '../components/TeamComponent.vue';
import store from '../store/index.js';

export default {
  components:{
    TeamComponent,
  },
  computed: { // store your methods
  students(){
    return store.state.students;
   }
  },
  methods:{
    addTeamMember(type, index){
      store.dispatch('addTeamMember', {type, index});
    }

  },
  created() { // hook
    store.dispatch('getStudents');
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
