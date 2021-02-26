<template>
  <router-link :to="{ name: 'BookDescription', params: {id: book.id }}" :class="{favorite: book.isFavorite}">
    <img :src="book.imgPath" alt="">
    <header class="card-header"> 
      <h2>{{book.title}} </h2>
    </header>
    <p>{{book.description}}</p>
  </router-link>
    <button @click="$emit('toggle-favorite', book.id)">Favorite</button>
    <button @click="$emit('delete-book', book.id)">Delete</button>
</template>

<script>
export default {
 name: "Book",
 props: {
    book: Object
  },
  emits: ['toggle-favorite', 'delete-book']
}
</script>

<style>

</style>