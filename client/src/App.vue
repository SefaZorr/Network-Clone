<template>
    <app-header/>
    <router-view :key="$route.fullPath"/>
    <app-cart/>
    <app-footer/>
</template>

<script>
import AppHeader from './components/Shared/Header/appHeader.vue';
import AppCart from './components/Shared/Cart/appCart.vue';
import AppFooter from './components/Shared/Footer/appFooter.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppCart,
    AppFooter,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
