<template>
  <div class="container">
        <a :href="ulr_base">click here</a>

  </div>
</template>

<script>
export default {
        data(){
    return{
      ulr_base:"https://rest.cameramanager.com/oauth/authorize?scope=write&client_id=dev_test&response_type=code&redirect_uri=http://localhost:8080/"
    }
    
    // /////////////
  }

}
</script>

<style>

</style>