<template>
 
<div>
    <!-- <Header/> -->


    <div className='search container'>
    <div class='search-bar' >
      
         <input type="text" v-model="search"
          placeholder="Search camera name.."/>
        </div> 
    </div> 
    <div class='cards container'>
     
        <ul  class="card" v-for="camera in cameras " :key="camera.cameraId" >
            <router-link :to="{name: 'SingleCamera', params:{cameraId : camera.cameraId}, props:{deviceTypeId : camera.deviceTypeId}}">
                <ul class="info">
                     <li>camera id: <span>{{camera.cameraId}}</span></li>
                    <li> camera device type id: <span>{{camera.deviceTypeId}}</span></li> 
                    <li> camera name: <span>{{camera.name}}</span></li>
                     <li>camera account id: <span>{{camera.accountId}}</span></li>
                <!-- <router-link  v-if="typeof camera.cameraId !== 'undefined'" v-bind:to="{name: 'SingleCamera', params:{cameraId : camera.cameraId}}"> -->
                        <!-- <li>camera ethMac Address: <span>{{camera.ethMacAddress}}</span></li>
                        <li>camera zone id: <span>{{camera.zoneId}}</span></li>
                        <li>camera account Id: <span>{{camera.accountId}}</span></li> -->
                        <li>|||||||||||||||||||||||||||||||||||||||||||||||||||||||||</li>
                    </ul>
                    
                </router-link>
                </ul>
   
            </div>
            <!-- <button class="btn-load" @click="loadMore">Load more...</button> -->
            <div v-if="visible < cameras.length">
                <button class="btn-load" @click="loadMore += step">load More Camera</button>
            </div>

            
        </div>

</template>

<script>
// import Header from "./Header.vue"
export default {
    props:["name","deviceTypeId", "ethMacAddress"],
    // components:{ Header},

    data(){
       return{
        search: "",
        // visible: 3,
        // step: 3,
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

    // provide(){
    //     return{
    //         cameras: this.cameras
    //     }

    // },

//     methods: {
//     loadMore() {
//         this.visible += this.step
   
//     },
//   },


computed: {
    // filteredList() {
    //   return this.cameras.filter(camera => {
    //     return camera.name.toLowerCase().includes(this.search.toLowerCase())
    //   })
    // //   .slice(0, companiesVisible)
    // }
    filterCamera(){
        return this.cameras.filter(camera => {
            return camera.name.toLowerCase().includes(this.search.toLowerCase())
        })
    },

    loadMore() {
      return  this.cameras.slice(0,this.visible)
   
    },

  }

}

// //////
    // methods:{
    //     filterCamera(){
    //         return this.cameras.filter((cameraId) => {
    //             if (searchTerm.target.value === "") {
    //           return cameraId;
    //         }else if (
    //             cameraId.name.toLowerCase().includes(searchTerm.toLowerCase())
    //         ) {
    //           return cameraId;
    //         }
    //         return false
    //         })

    //     }
    // }


</script>

<style>

</style>



 