<template>
<div class="team">
<h1>Team {{type}}</h1>

<ul>
  <li v-for="member in team">
    {{member.name}}
  </li>
</ul>

</div>
  
</template>

<script>
import store from '../store/index.js';

export default {
  props: ['type'],
  computed: {
    team() {
      return this.type === 'A'? store.state.teamA: store.state.teamB;
    }
  }
  
}
</script>

<style>

</style>

