<template>
  <div class="container">
    <div class="not-found">
      <img src="../assets/image/not-fond.png" alt="">
      <h1>404 - Page Not Found</h1>
    <p>This page no longer exists or was moved to another location.</p>
    </div>

    
 <!--  import the Buttons to redirect to the Home component  -->
    <Buttons/>
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue"
export default {
  components:{Buttons}

}
</script>

<style>

</style>