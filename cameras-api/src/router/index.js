import { createRouter, createWebHistory } from "vue-router";
 import Cameras from "../components/Cameras.vue"
 import SingleCamera from "../components/SingleCamera.vue"

const routes = [
	{
		path: "/",
		name: "Cameras",
		component: Cameras,
	},

	{
		path: "/single-camera/:cameraId",
		name: "SingleCamera",
		component: SingleCamera,
		props: true,
	},


];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
