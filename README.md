# React-native-with-sidebar
React Native App with a Stack Navigation
<br>
<h3>Setup</h3>
add environment variables

https://facebook.github.io/react-native/docs/tutorial 

Before attempting to run this demo please make sure that you have taken care of the following dependencies<br>

Ensure that you have node installed and then use npm to install react native as described below<br>

Installing node The simplest way to get started is to install homebrew on your system. You can then install node and watchman with the following commands<br>

<h4>brew install node</h4><br>
<h4>brew install watchman</h4><br>
Installing React-Native Command Line Interface You may install react-native with the following npm command<br>

<h4>npm install -g react-native-cli <h4><br>
once this is complete, navigate to this projects folder and type npm install to install all dependencies listed in the project's package.json file<br>

Configuring the environments for iOS and Android iOS (XCode)<br>

Navigate to project ios subfolder and run<br>

<h4>pod install</h4> to install the latest iOS MotionDNA SDK<br>

Android (Android Studio)
<br>
Open the Android project folder in Android Studio Aside from instant run, install any recommended dependencies and build tools that are suggested<br>

Running the demos The hello world project is designed to work with both ios and android systems. It will run on the simulator or the actual device.<br>

You can start streaming the app to your device with the following commands<br>

For iOS<br>

<h4>react-native run-ios</h4> <br>
For iOS you will probably want to have the simulator open already as XCode 9 does not start the simulator automatically with this command<br>
<br>
For Android <br>

<h4>adb reverse tcp:8081 tcp:8081 </h4> <br>
<h4>sudo react-native run-android </h4> 
<br>
#additional commands <br>
<h4>adb devices ----- to see devices connected </h4> <br>
<h4>sudo npm start </h4> <br>
