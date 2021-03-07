<template>
  <form @submit="onSubmit">
    <div class="input-wrapper">
      <label for="title">Book Title</label>
      <input type="text" v-model="title" id="title" name="bookTitle">
    </div>
    <div class="input-wrapper">
      <label for="img-url">Cover image url</label>
      <input type="text" v-model="imgUrl" id="img-url" name="imgUrl">
    </div>
    <div class="input-wrapper">
      <label for="description">Book short description</label>
      <input type="text" v-model="description" id="description" name="bookDescription">
    </div>

    <input type="submit" value="Add Book" >
  </form>
</template>

<script>
export default {
name: "AddBook",
data() {
  return {
    title: '',
    imgUrl: '',
    description: ''
  }
},
methods: {
  onSubmit(e) {
    e.preventDefault()
    if(!this.title) {
      alert('You need to add a title!');
      return
    }
    const newBook = {
      // id: Math.floor(Math.random()*100),
      title: this.title,
      imgUrl: this.imgUrl,
      description: this.description,
      isFavorite: false
    }

    this.$emit('add-book', newBook)

    this.title = ''
    this.imgUrl = ''
    this.description = ''
  }
}
}
</script>

<style>
.input-wrapper {
  display: flex;
  flex-direction: column;
}
</style>