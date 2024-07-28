# MovieBrowserApp

# run following commands to install node packages
npm install
cd ios 
pod install

# run following command to set up gradle for android

chmod +x android/gradlew

# run following commands to set up your android studio path if not set or set path in android/local.properties file

echo $ANDROID_HOME
export ANDROID_HOME = /path/to/your/project/android/sdk
export PATH = $PATH:$ANDROID_HOME/platform-tools
export PATH = $PATH:$ANDROID_HOME/tools
./gradlew clean

# run following command to run on android
npx react-native run-android

OR

npm start (press a to run on android after executing npm start)

# run following command to run on ios

npx react-native run-ios

OR

npm start (press i to run on android after executing npm start)

