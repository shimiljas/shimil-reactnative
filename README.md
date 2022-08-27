# shimil-reactnative

# Setup to run application

  1. Clone the project https://github.com/shimiljas/shimil-reactnative
  2. cd shimil-reactnative
  3. yarn or npm install
  4. create .env file
  5. add values to .env file (copy env values from .env.prod)
   
   ![Screenshot 2022-08-27 at 12 07 43 PM](https://user-images.githubusercontent.com/25904529/187018333-f18af5a8-216a-4d05-820c-4e59be0a1e3a.png) 
    
  
    
   ![Screenshot 2022-08-27 at 1 07 29 PM](https://user-images.githubusercontent.com/25904529/187020308-5fe9ac32-b808-4d9a-b0b0-fd4b00210be3.png)


    
    
  6. for ios do pod install in ios foler
  7. run npm run android for android and npm run ios for ios
  
      env values
      
      BASE_URL='https://upayments-studycase-api.herokuapp.com/'
      TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlhbXNoaW1pbEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vc2hpbWlsamFzIiwiaWF0IjoxNjYxNTQ0NDM2LCJleHAiOjE2NjE5NzY0MzZ9.OROM3RSLLH8K0sDYsTSB6EfjEM3mYRXuQ-uLWRQGfkE'
      

# Folder Structure

 
![Screenshot 2022-08-27 at 12 12 10 PM](https://user-images.githubusercontent.com/25904529/187018463-7936df9d-e7d9-4251-b967-a32a80b92b45.png)

 
| Folder  | Usage |
| ------------- | ------------- |
| assets | Managing assets and image  |
| components  | Managing resuable components  |
| dummydata  | Dummy data folder for testing  |
| navigation  | Handled all navigation  |
| reducer  | Handled all reducer  |
| screen  | All screens are created  |
| store  | Configuring all store |
| theme  | Handled all theme |
| theme  | For all utility functions |

# Responsive handling

 1. font normalization
    
     import normalize funtion from font normalize
   
     ![Screenshot 2022-08-27 at 12 53 47 PM](https://user-images.githubusercontent.com/25904529/187019856-158968d6-bb05-43ac-b7ba-48f23ee188d8.png)

     ![Screenshot 2022-08-27 at 12 54 06 PM](https://user-images.githubusercontent.com/25904529/187019864-adbf802e-f5f2-41fc-9c17-bdc1c0ee269c.png)
   
 2. Screen scaling

     According to device height and width all scaling are handled
     
     ![Screenshot 2022-08-27 at 12 55 43 PM](https://user-images.githubusercontent.com/25904529/187019937-c10d2fd6-ebb5-4d57-bbc8-79e4770db253.png)

     ![Screenshot 2022-08-27 at 12 56 03 PM](https://user-images.githubusercontent.com/25904529/187019943-c009f9f8-083c-49e9-b76d-2858418fcb7d.png)



# store creation and reducer usage

  we are using redux tool kit which is the latest libary for redux managment
  

  ![Screenshot 2022-08-27 at 12 57 22 PM](https://user-images.githubusercontent.com/25904529/187019984-485e1263-c7f2-4cee-a7e4-edbf3f1ea9f1.png)
  
  reducer can create use redux tool kit method createSlice

  ![Screenshot 2022-08-27 at 12 58 31 PM](https://user-images.githubusercontent.com/25904529/187020038-ead53898-5561-4edc-8267-14b8560f2823.png)
  
  
  # Packages used
  
  * Redux toolkit
  * React query
  * react-navigation
  * shopify/restyle
  * react-native-config
  * react-native-screens
  * react-redux
  * redux-logger
  * yup
  * formik
  * axios



  
  
  
  
  

