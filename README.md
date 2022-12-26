
## REST API application Eagle Eye NetWork


 The goal of this Api is to Authenticate the user to view the cameras from authentication verification by refresh_token

 a refresh_token can be requested to prevent the user from logging in again
 
 After login, the user is redirected to the redirect_uri  to display all the cameras 
 


## Install

   npm  install
   
   
## Run the development server 

    npm npm run serve 
    
    
### Request

method: `POST`

 - -  https://rest.cameramanager.com/



### Response

    Date: Fri , 23 Dec 2022 14:00 
    Content-Type: application/json
    Accept: application/json
    
        

### Get cameras

### Request

 method : `GET`

 - - https://rest.cameramanager.com/


### Response

    HTTP/ 200 OK
    Date: Fri , 23 Dec 2022 14:00 
    Status: 200 OK
    Content-Type: application/json
    Content-Type: application/json
    Content-Length: 2
    
	{
		"cameraId": 1729057,
		"name": "Reception inside door",
		"deviceTypeId": 10024,
		"ethMacAddress": "BC-32-5F-29-C8-69",
		"zoneId": 785542,
		"accountId": 27099
	},
   
   	{
		"cameraId": 1841837,
		"name": "Entrance",
		"deviceTypeId": 10009,
		"ethMacAddress": "00-1C-27-15-61-D0",
		"zoneId": 785542,
		"accountId": 27099
	}
    
    
    ### Request

`GET /cameras/id`

- - https://rest.cameramanager.com/cameraId)

### Response

    HTTP/ 200 OK
    Date: Fri , 23 Dec 2022 14:00 
    Status: 200 OK
    Content-Type: application/json
    Content-Type: application/json
    Content-Length: 1
    
    
  	 {
		"cameraId": 1729057,
		"name": "Reception inside door",
		"deviceTypeId": 10024,
		"ethMacAddress": "BC-32-5F-29-C8-69",
		"zoneId": 785542,
		"accountId": 27099
	},



  
   
