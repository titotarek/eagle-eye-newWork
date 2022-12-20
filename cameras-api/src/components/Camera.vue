<template>
    <div>
    <!--  import the Header components -->
        <Header/>
    <!--  import the ForLogIn components -->
        <ForLogIn/>


    <!-- Star of the camera.vue components  -->
    <div class="container">
    <div class='search'>
    <div class='search-bar' >
      
         <input type="text" v-model="search"
          placeholder="Search camera name.."/>
        </div> 
    </div> 
    <div class='cards container'>
     
        <ul  class="card" v-for="camera in filterCamera " :key="camera.cameraId" >
            <ul class="info">
                    <router-link :to="{name: 'SingleCamera', params:{cameraId : camera.cameraId}, props:{deviceTypeId : camera.deviceTypeId}}">
                     <li>camera id: <span>{{camera.cameraId}}</span></li>
                    <li> camera device type id: <span>{{camera.deviceTypeId}}</span></li> 
                    <li> camera name: <span>{{camera.name}}</span></li>
                     <li>camera account id: <span>{{camera.accountId}}</span></li>
                    </router-link>
                    </ul>
                    
                </ul>
   
            </div>
        </div>
            <!-- End of the camera.vue components  -->



        <!--  import the Footer components -->
        <Footer/>
    </div>

</template>

<script>
import Header from "./Header.vue"
import ForLogIn from "./ForLogIn.vue";
import Footer from "./Footer.vue";

export default {
    props:["name","deviceTypeId", "ethMacAddress"],
    components:{ ForLogIn,Header,Footer},

    data(){
       return{
        search: "",
        cameras:[
                        {
                            cameraId: 1729057,
                            name: "Reception inside door",
                            deviceTypeId: 10024,
                            ethMacAddress: "BC-32-5F-29-C8-69",
                            zoneId: 785542,
                            accountId: 27099
                        },
                        {
                            cameraId: 1841837,
                            name: "Entrance",
                            deviceTypeId: 10009,
                            ethMacAddress: "00-1C-27-15-61-D0",
                            zoneId: 785542,
                            accountId: 27099
                        },
                        {
                            cameraId: 1729057,
                            name: "Aaaaaaaaaaa",
                            deviceTypeId: 10024,
                            ethMacAddress: "BC-32-5F-29-C8-69",
                            zoneId: 785542,
                            accountId: 27099
                        },
                        {
                            cameraId: 1841837,
                            name: "Ddddddddddddddddd",
                            deviceTypeId: 10009,
                            ethMacAddress: "00-1C-27-15-61-D0",
                            zoneId: 785542,
                            accountId: 27099
                        },


                        {
                            cameraId: 1729057,
                            name: "Ggggggggggggggg",
                            deviceTypeId: 10024,
                            ethMacAddress: "BC-32-5F-29-C8-69",
                            zoneId: 785542,
                            accountId: 27099
                        },
                        {
                            cameraId: 1841837,
                            name: "Ccccccccccccc",
                            deviceTypeId: 10009,
                            ethMacAddress: "00-1C-27-15-61-D0",
                            zoneId: 785542,
                            accountId: 27099
                        }      
                ]  
       }
    },

 


computed: {

    //  Implement filter => this can get single camera
    filterCamera(){
        return this.cameras.filter(camera => {
            return camera.name.toLowerCase().includes(this.search.toLowerCase())
        })
    },


  }

}




</script>

<style>

</style>



 