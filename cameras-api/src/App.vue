<template>
  <div>
   <Header/>
   
   <ForLogIn/>
   <Post/>
   <router-link to="/"></router-link> 
   <router-view/>
   <Footer/>
  </div>

</template>
<script>

import Post from "./components/Post.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue";
// import Camera from "./components/Camera.vue";
import ForLogIn from "./components/ForLogIn.vue";
export default {
  components:{Post, Footer, ForLogIn,Header },
  data(){
    return{
    }
    
    
  }
  

}
</script>

<style>
@import "./assets/index.css";
@import "./assets/normalize.css";


</style>
