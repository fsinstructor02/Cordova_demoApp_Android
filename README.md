# Cordova_demoApp_Android

## Installing Cordova
- Cordova command-line runs on Node.js and is available on NPM. Follow platform specific guides to install additional platform dependencies. Open a command prompt or Terminal, and type npm install -g cordova.

- $ npm install -g cordova 

## Create a project
- Create a blank Cordova project using the command-line tool. Navigate to the directory where you wish to create your project and type cordova create <path>.

- For a complete set of options, type cordova help create.

- $ cordova create MyApp

## Add a platform
- After creating a Cordova project, navigate to the project directory. From the project directory, you need to add a platform for which you want to build your app.

- To add a platform, type cordova platform add <platform name>.

- For a complete list of platforms you can add, run cordova platform.

- $ cd MyApp

- $ cordova platform add browser

## Run your app
- From the command line, run cordova run <platform name>.

- $ cordova run browser

### Android Development / Build

- Download and install Java JDK Latest version http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html

- Download and install  Android Studio https://developer.android.com/studio/index.html

- Download ( Ant 1.9.3 or Ant 1.9.4)  https://www.apache.org/dist/ant/binaries/ 

### Variables Environnement (Windows Only)

- Add the variables to the environnement

-  Go to Control Panel > Advance Settings and click on Variables Environnement

-  Click on the New Button

- Add Variable Name: (ANT_HOME) and Variable Value: (C:\apache-ant-1.9.4) 

- Add Variable Name: (JAVA_HOME) and Variable Value: (C:\Program Files\Java\jdk1.8.0_162) 

#### Build The App

- Please review the site: https://cordova.apache.org/docs/en/latest/guide/cli/#build-the-app

#### Add Platforms
- All subsequent commands need to be run within the project's directory, or any subdirectories:

- $ cd myApp
- Add the platforms that you want to target your app. We will add the 'ios' and 'android' platform and ensure they get saved to config.xml and package.json:

- $ cordova platform add ios
- $ cordova platform add android

#### To check your current set of platforms:

- $ cordova platform ls

#### To check if you satisfy requirements for building the platform:

- $ cordova requirements

#### By default, cordova create script generates a skeletal web-based application whose start page is the project's www/index.html file. Any initialization should be specified as part of the deviceready event handler defined in www/js/index.js.

#### Run the following command to build the project for all platforms:

- $ cordova build

#### You can optionally limit the scope of each build to specific platforms - 'ios' in this case:

- $ cordova build ios

#### You can optionally limit the scope of each build to specific platforms - 'android' in this case:

- $ cordova build android


#### SDKs for mobile platforms often come bundled with emulators that execute a device image, so that you can launch the app from the home screen and see how it interacts with many platform features. Run a command such as the following to rebuild the app and view it within a specific platform's emulator:

- $ cordova emulate android