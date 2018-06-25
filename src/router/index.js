import Vue from 'vue';
import Router from 'vue-router';
import StudentsComponent from '../components/StudentsComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StudentsComponent',
      component: StudentsComponent,
    },
  ],
});
