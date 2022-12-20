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
  props:["cameraId"],
    
  data(){

    return{
  
    }

  },
 

  }
  </script>
  
  <style>
  
  </style> 