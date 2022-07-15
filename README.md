### Wasabi Music - A music NFT streaming platform.
This is the repo of the mobile app for Wasabi Music. 

The application was written in React Native. Currently uses a hard coded playlist of our favorite NFT songs as we implement the support to utilize the full catalog of NFT music found at https://wasabimusic.io/

#### Folder Structure
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


#### Running the project

##### iOS
Take the following steps to run the application locally for iOS
1. `yarn install`
2. navigate to the iOS folder using a terminal `cd ios` 
3. run `pod install`
4. run `yarn start` within the directory in a terminal
5. open the `temp.xworspace` using xcode
6. run the project using xcode once everything loads

##### Android Coming Soon


#### Running Test Cases

##### iOS
Take the following steps to run the test cases for the application
1. `yarn install` 
2. navigate to the iOS folder using a terminal `cd ios`
3. run `pos install`
4. run `detox build -c ios.sim.debug` to build the debug version of the app for testing
5. run `detox test -c ios.sim.debug` to run the test cases

If everything is installed correctly, the tests should run