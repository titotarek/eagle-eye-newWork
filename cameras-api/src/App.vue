<template>
  <div>
    <header className="heder">
          <h1>EEagle Eye Networks Vue.Js Developer Assessment</h1>
    </header>
   
   <Post/>
   <!--  the router of the camera.vue router   -->
   <router-link to="/"></router-link> 
   <router-view/>
  </div>

</template>
<script>

import Post from "./components/Post.vue"
export default {
  components:{Post},
  data(){
    return{
    }
    
    
  }
  

}
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
