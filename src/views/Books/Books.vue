<template>
  <div v-if="books.length" class="container">
    <section class="card" v-for="book in books" :key="book.id">
      <Book :book="book" @toggle-favorite="toggleFavorite" @delete-book="deleteBook"/>
    </section>
  </div>

  <div v-else>
    <p class="loader">
      Loading data...
    </p>
  </div>
</template>

<script>
  import Book from "./Book.vue"
export default {
  components: {
    Book
  },
  data() {
    return {
      books: [ ]
    } 
  },
  methods: {
    toggleFavorite(id) {
      this.books = this.books.map(book => book.id === id ? {...book, isFavorite: !book.isFavorite } : book)
    },
    deleteBook(id) {
      if(confirm("Are you sure you want to delete this?")) {
        this.books = this.books.filter(book => book.id !== id)
      }
    }
  },
  mounted() {
    fetch("http://localhost:3001/books")
    .then(res => res.json())
    .then(data => this.books = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style>
.favorite {
  background: #ee0099;
}
</style>