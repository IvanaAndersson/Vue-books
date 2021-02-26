<template>
  <section class="book" v-if="book">
    <header class="book-header">
      <h2>
        {{ book.title }}
      </h2>
    </header>
    <main class="book-body"> 
      <p>{{ book.description}}</p>
    </main>
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
      book: null,
    }
  },
  mounted() {
    fetch("http://localhost:3001/books/" + this.id)
    .then(res => res.json())
    .then(data => this.book = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>