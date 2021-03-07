<template>
  <div v-if="books.length" class="container">
    <AddBook @add-book="addBook"/>
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
  import AddBook from "./AddBook.vue"
export default {
  components: {Book, AddBook},
  data() {
    return {
      books: [ ]
    } 
  },
  methods: {
    async fetchBooks() {
      const res = await fetch("api/books")
      const data = await res.json();

      return data
    },
    async fetchBook(id) {
      const res = await fetch(`api/books/${id}`)
      const data = await res.json();

      return data
    },
    async addBook(book) {
      const res = await fetch('api/books', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
      })

      const data = await res.json()
      this.books = [...this.books, data]
    },
     async deleteBook(id) {
      if(confirm("Are you sure you want to delete this?")) {
        const res = await fetch(`api/books/${id}`, {
         method: "DELETE",
        })
        res.status === 200 ?  (this.books = this.books.filter(book => book.id !== id)) : alert("Error deleting task")
      }
    },
    async toggleFavorite(id) {
      const toggledBook = await this.fetchBook(id)
      const updatedBook = {...toggledBook, isFavorite: !toggledBook.isFavorite }

      const res = await fetch(`api/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
      })

      const data = await res.json()
      this.books = this.books.map(book => book.id === id ? {...book, isFavorite: data.isFavorite} : book)
    },
  },
  async mounted() {
    this.books = await this.fetchBooks()
  }
}
</script>

<style>
.favorite {
  background: #ee0099;
}
</style>