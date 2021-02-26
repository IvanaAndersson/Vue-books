<template>
  <section class="character" v-if="character">
    <header class="character-header">
      <h2>
        {{ character.name }}
      </h2>
    </header>
    <main class="character-body"> 
      <img src="" alt="">
      <p>{{character.description}}</p>
    </main>
    <footer class="character-footer"></footer>
  </section>
  <div v-else>
    Loading data...
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: null,
    }
  },
  mounted() {
    fetch("http://localhost:3001/characters/" + this.id)
    .then(res => res.json())
    .then(data => this.character = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>