<template>
  <header class="site-header">
    <router-link to="/">
      <h1>Logo</h1>
    </router-link>
    <Navigation />
  </header>
</template>

<script>
import Navigation from "./Navigation.vue"
export default {
  name: "HeaderMain",
  components: { Navigation }
}
</script>

<style>
  .site-header, 
  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .site-header {
    background: #d3e0ea;
  }
  .site-header h1 {
    margin: 0;
    padding: 1rem 2.5rem;
  }
  .site-header h1:hover {
    text-decoration: underline;
  }
</style>