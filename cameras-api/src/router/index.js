import { createRouter, createWebHistory } from 'vue-router'
import Camera from "../components/Camera.vue";
import SingleCamera from "../components/SingleCamera.vue";
// import PageNotFound from "../components/PageNotFound.vue";
// import Camera from "../views/Camera.vue"
// import SingleCamera from "../views/SingleCamera.vue"

const routes = [
  {
    path: '/',
    name: 'Camera',
    component: Camera
  },

  {
    path: '/single-camera/:cameraId',
    name: 'SingleCamera',
    component: SingleCamera,
    props: true
  },
  // {
  //   path: '/catch-all(.*)*',
  //   name: PageNotFound,
  //   component: PageNotFound

  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
