<template>
  <div v-if="characters.length" class="container">
  <section class="card" v-for="character in characters" :key="character.id">
      <router-link :to="{ name: 'CharacterDescription', params: {id: character.id}}">
        <img src="" alt="">
        <header class="card-header">
          <h2> {{character.name}} </h2> 
        </header>
        <p>{{character.description}}</p>
      </router-link>
    </section>
  </div>
  <div v-else>
    <p class="loader">
      Loading data...
    </p>
  </div>
  
</template>

<script>
export default {
  name: "Characters",
  data() {
    return {
      characters: []
    }
  },
  mounted() {
    fetch("http://localhost:3001/characters")
    .then(res => res.json())
    .then(data => this.characters = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>