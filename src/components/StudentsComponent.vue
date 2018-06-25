<template>
  <div class="hello">
    <h1>Students</h1>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{student.name}} |
        <i>{{student.games.length}} Favorite Games</i>
        <button>Team A</button>
        <button>Team B</button>
        <!-- {{student.selected}} -->
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store/index.js';

export default {
  computed: { // store your methods
  students(){
    return store.state.students;
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
