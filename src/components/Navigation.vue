<template>
  <nav class="main-nav">
    <ul class="nav-list">
      <li class="nav-item"> 
        <router-link to="/" class="nav-link"> Home</router-link></li>
      <li class="nav-item"> 
        <router-link to="/books" class="nav-link"> Books</router-link></li>
      <li class="nav-item"> 
        <router-link to="/characters" class="nav-link"> Characters</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style>
/* .main-nav  */
.nav-list {
  margin: 0;
}
.nav-link {
  display: inline-block;
  padding: 2rem 3.5rem;
  transition: all 0.2s ease-in-out;
}
.nav-link:hover {
  background: #276678;
  color: white
}
</style>