<template>
 
  <div>
    
    <div class='cards container'>
     
     <ul  class="card">
         <ul class="info">
             <!-- <router-link  v-if="typeof camera.cameraId !== 'undefined'" v-bind:to="{name: 'SingleCamera', params:{cameraId : camera.cameraId}}"> --> 
                 <li>camera id: <span>{{cameraId}}</span></li>
                 <li>camera id: <span>{{deviceTypeId}}</span></li>
                 <!-- <li>camera deviceTypeId: <span>{{ deviceTypeId }}</span></li> -->
                
                     <li>|||||||||||||||||||||||||||||||||||||||||||||||||||||||||</li>
                 </ul>
                 
             </ul>

         </div>
         
     </div>
  
  </template>
  
  <script>
//   import Camera from './Camera.vue';
  export default {
    // name : 'camera',
    // inject:["cameras"],
    // name: 'singleCamera',
  props:{
    // cameraId:{type :String,require: true },
    cameraId:{
      type :String,
      require: true 
    },

    deviceTypeId:{
      type :String,
      require: true 
    },
  // // props:["cameraId", "deviceTypeId"],
    
  },
  
  data(){
    // console.log(camera)
    return{
  
  
    
    }

  },
// methods:{
// clickBtn(){
//   console.log(this.deviceTypeId)
// ;}
// }
      // created(){
      //  const deviceTypeId =  this.$route.params.deviceTypeId
      //  console.log(deviceTypeId)
   


      // }
  
  }
  </script>
  
  <style>
  
  </style> -->