import { createRouter , createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Books from "../views/Books/Books.vue"
import BookDescription from "../views/Books/BookDescription.vue"
import Characters from "../views/Characters/Characters.vue"
import CharacterDescription from "../views/Characters/CharacterDescription.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  }, 
  {
    path: "/books/:id",
    name: "BookDescription",
    component: BookDescription,
    props: true
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters
  }, 
  {
    path: "/characters/:id",
    name: "CharacterDescription",
    component: CharacterDescription,
    props: true
  },
  //catch all 404
  {
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: NotFound
  }
]
const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
}) 

export default router