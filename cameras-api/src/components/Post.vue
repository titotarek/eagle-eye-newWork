<template>
    <div>
    
    </div>
       
      </template>
      
      <script>
      import axios from 'axios'
      
      export default {
      data(){
          return{
            code: "" ,
        }
        
    },

   
    //     mounted () {  
    //         const queryCode =  ""
    //         this.getQueryCode()

        
    // },


    // methods:{
    //     getToken(){
    //       axios({
    //             method: "POST",
    //             // body:queryCode,
    //             url: `http://rest.cameramanager.com/oauth/token?grant_type=dev_test_code&scope=read&code=${queryCode.toLowerCase()}&redirect_uri=http://localhost:8080/`,
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //                 // 'Access-Control-Allow-Origin': 'http://localhost:8080',
    //                 'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS, POST',
    //                 'Access-Control-Allow-Headers': true,
    //                 'content-type': 'application/json',
    //                 'Accept': "application/json",
    //                 'Access-Control-Allow-Credentials':true,
    //                 "Authorization" : "Basic ZGV2X3Rlc3Q6M0gxQmY2bUNjdElncEN1enZybnlla2YzVmhBVUVuS0o="
    //             }
    //             // headers: {
    //             //         'Accept': "application/json",
    //             //         "Content-Type": "application/json",
    //             //         "Access-Control-Allow-Origin":" *"
    //             //         }
    //         }).then(response => {
    //             // response.headers("Access-Control-Allow-Origin", "https://rest.cameramanager.com/")
    //             console.log(response.data + 'mounted code');
    //         }).catch(error => {
    //             console.log('errors happening' + " " + error);
    //         });
    //       },
    //       getQueryCode(){
    //         if(window.location.href.indexOf("code") > -1){
    //           let dl = new URL(document.location),
    //           searchParams = dl.searchParams;
    //           this.code = searchParams.get("code")

    //           console.log(this.code)
    //           this.getAccessToken()

    //         }

    //       },
    //       getAccessToken(){
    //         axios({
    //             method: "POST",
    //             // body:queryCode,
    //             url: "http://rest.cameramanager.com/oauth/token?grant_type=authorization_code&scope=read&code=" + this.code + "&redirect_uri=http://localhost:8080/",
    //             headers: {
    //               "Access-Control-Allow-Origin": "*",
    //                 'Access-Control-Allow-Origin': 'http://localhost:8080/',
    //                 'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS, POST',
    //                 'Access-Control-Allow-Headers': true,
    //                 'content-type': 'application/json',
    //                 'Accept': "application/json",
    //                 'Access-Control-Allow-Credentials':true,
    //                 "Authorization" : "Basic ZGV2X3Rlc3Q6M0gxQmY2bUNjdElncEN1enZybnlla2YzVmhBVUVuS0o="
    //             }
              
    //         }).then(response => {
    //             console.log(response.data + 'mounted code');
    //         }).catch(error => {
    //             console.log('errors happening' + " " + error);
    //         });
    //       }

    // }



      
          }
      
      </script>
      
      <style>
      
      </style>