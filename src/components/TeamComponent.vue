<template>
<div class="team">
<h1>Team {{type}}</h1>

<ul>
  <li v-for="(member, index) in team" :key="member.id">
    {{member.name}}
    <button @click="removeFromTeam(type, index)">X</button>
  </li>
</ul>

</div>
  
</template>

<script>
import store from '../store/index.js';

export default {
  props: ['type'],
  methods:{
    removeFromTeam(data){
      store.dispatch('removeFromTeam',data);
    }
  },
  computed: {
    team() {
      return this.type === 'A'? store.state.teamA: store.state.teamB;
    }
  }
  
}
</script>

<style>

</style>

