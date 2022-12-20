import { createRouter, createWebHistory } from 'vue-router'
import Camera from "../components/Camera.vue";
import SingleCamera from "../components/SingleCamera.vue";
import PageNotFound from "../views/PageNotFound.vue";

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

  /*
      PageNotFound is  Router for 404 Error Page
  */
  {
    path: '/:catchAll(.*)',
    name: PageNotFound,
    component: PageNotFound

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
