<template>
 
  <div class="container">
    
    <div class='cards cr-left'>
     <ul  class="card">
         <ul class="info">
             <!-- <router-link  v-if="typeof camera.cameraId !== 'undefined'" v-bind:to="{name: 'SingleCamera', params:{cameraId : camera.cameraId}}"> --> 
                 <li>camera id: <span>{{cameraId}}</span></li>
                <li>||||||||||||||||||||||||||||||||||||||||||||||||||||||</li>
                 </ul>
                 
             </ul>

         </div>
         
     </div>
  
  </template>
  
  <script>

  export default {
    inject: ['cameras'],
  props:["cameraId"],
    
  data(){

    return{
  
    }

  },
  created(){
    const cameraId = this.$route.params.cameraId
    console.log(cameraId)
     cameraId = this.cameras.find((camera) => camera.cameraId === cameraId);
  }

  }
  </script>
  
  <style>
  
  </style> 