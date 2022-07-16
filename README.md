## Wasabi Music - A music NFT streaming platform.💿 💿 💿
This is the repo of the mobile app for Wasabi Music. 

The application was written in React Native. Currently uses a hard coded playlist of our favorite NFT songs as we implement the support to utilize the full catalog of NFT music found at https://wasabimusic.io/

📱📱📱📱📱
Try the app now on TestFlight for iOS https://testflight.apple.com/join/OIYIps8f
Android coming soon 

### Folder Structure 📁 📁 📁 📁
App.js - main application

e2e
* detox test cases

src 
* assets - for all images and test input data
* components - for screen components
* navigation - for all navigation objects
* redux - using redux slices for state
* screens - a place for all our screens
* styles - shared styling
* utils - for all helper functions


### Running the project 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 

##### iOS
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. navigate to the iOS folder using a terminal `cd ios` 
3. run `pod install`
4. run `yarn start` within the directory in a terminal
5. open the `temp.xworspace` using xcode
6. run the project using xcode once everything loads

##### Android 
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. run `yarn android`

If you run into any issues, please make sure your development environment is set-up with a fresh react native app.

If your android app runs, but it can't connect to the react native server
1. Open a new terminal and navigate to the project
2. Run `adb reverse tcp:8081 tcp:8081`
3. Run `yarn start`
4. Run `yarn android` 

### Running Test Cases 🧪 🧪 🧪 🧪 🧪 🧪

##### iOS
Take the following steps to run the test cases for the application
1. `yarn install` 
2. navigate to the iOS folder using a terminal `cd ios`
3. run `pos install`
4. run `detox build -c ios.sim.debug` to build the debug version of the app for testing
5. run `detox test -c ios.sim.debug` to run the test cases

##### iOS coming soon

If everything is installed correctly, the tests should run