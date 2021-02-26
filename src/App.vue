<template>
  <HeaderMain />
  <main>
    <router-view/>
  </main>
  <TheFooter />
</template>

<script>
import HeaderMain from './components/HeaderMain.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: "App",
  components: { HeaderMain , TheFooter },
  data(){
    return {
      title: "My Friends list"
    }
  },
  methods: {
    
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}

</style>
