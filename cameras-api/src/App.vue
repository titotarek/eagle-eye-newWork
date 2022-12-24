<template>
	<div>
		<ProgressIndicator />
		<Header />
		<router-link to="/"></router-link>
		<router-view />
	</div>
</template>
<script>
import Header from "./components/Header.vue";
import ProgressIndicator from "./components/ProgressIndicator.vue";
export default {
	components: { ProgressIndicator, Header },
	data() {
		return {};
	},
};
</script>

<style>
/* 
 index.css => is the  main template css File 
*/
@import "./assets/index.css";
/* 
 normalize.css => Render all element normally in all the browser 
*/
@import "./assets/normalize.css";
</style>
