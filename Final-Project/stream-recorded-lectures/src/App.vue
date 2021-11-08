<template>
  <div id="app">
    <AppNavbar />
    <Error v-if="error" :message="error" />
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Navbar from './components/Navbar';
import alert from '@/components/alert';


  export default {
     name: 'App',
     components: {
        AppNavbar:Navbar,
        Error: alert
      
      },
      computed:{
        ...mapGetters(['error'])
      }
}
</script>

<style>
</style>