# SSCWsvit   RN-Boilerplate (shashank-sapphire-coders-workstations)
--------------------------------------
## **INDEX**
1. [Snapshots](#Snapshots)
2. [External Libraries used](#external-libraries-used)
3. [package.json file](#package.json-file)
4. [Try Out](#try-out)
5. [Contact me!](#contact-me)
--------------------------------------
## **Snapshots**

|   |   |   |
|---|---|---|
|  ![IntroScreen](/SSCWappimages/1.png) | ![DrawerNavigation](/SSCWappimages/2.png)  |  ![About and Credits](/SSCWappimages/3.png) |
|  ![Sample Screen 1](/SSCWappimages/4.png) |  ![Sample Screen 2](/SSCWappimages/5.png) |  ![Sample Screen 3](/SSCWappimages/6.png) |
|  ![Sample Screen 4](/SSCWappimages/7.png) | ![Sample Screen 3](/SSCWappimages/8.png)  | ![Sample Screen 3](/SSCWappimages/9.png)  |
|  ![Sample Screen 3](/SSCWappimages/10.png) | ![Sample Screen 3](/SSCWappimages/11.png)  | ![Sample Screen 3](/SSCWappimages/12.png)  |
|  ![Sample Screen 3](/SSCWappimages/14.png) | ![Sample Screen 3](/SSCWappimages/15.png)  |  ![Sample Screen 3](/SSCWappimages/16.png) |
| ![Sample Screen 3](/SSCWappimages/17.png)  |  ![Sample Screen 3](/SSCWappimages/18.png) | ![Sample Screen 3](/SSCWappimages/13.png) |

Few snapshots of my app.

## **External Libraries Used**
Some of the main external opensource libraries used in the boilerplate are : 

> ### **React-Navigation**
* React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.

```json
"react-navigation": "^3.8.1"
```

* **Offlicial Link** : https://reactnavigation.org/docs/en/getting-started.html

> ### **React Native Firebase**
* React Native Firebase makes using Firebase with React Native simple. It provides a light-weight layer on-top of the native Firebase SDKs (iOS & Android) whilst mirroring the Firebase Web SDKs API as closely as possible.

```json
"react-native-firebase": "^5.3.1"
```

* **Official Link** :  https://rnfirebase.io/docs/v5.x.x/getting-started

> ### **React Native Calenders  (WiX)**
* A fully customized calender written in pure JavaScript.

```json
"react-native-calendars": "^1.66.0"
```
* **Official Link** : https://github.com/wix/react-native-calendars

> ### **React Native Foldview**
* FoldingCell implementation in JavaScript. This project was inspired by the folding cell animation seen on Dribbble.

```json
"react-native-foldview": "^1.2.1"
```

* **Official Link** : https://github.com/jmurzy/react-native-foldview

> ### **React Native Snap Carousel**
* Swiper component for React Native featuring previews, multiple layouts, parallax images, performant handling of huge numbers of items, and RTL support. Compatible with Android & iOS.

```json
"react-native-snap-carousel": "^3.7.5"
```

* **Official Link** : https://github.com/archriss/react-native-snap-carousel

> ### **React Native Linear Gradient**
* A  `<LinearGradient />` component for react-native. It is actually a dependency of React Native Snap Carousel

```json
"react-native-linear-gradient": "^2.5.4"
```

* **Official Link** : https://github.com/archriss/react-native-snap-carousel

> ### **React Native Auto Grow Text Input**
* A helper component meant to be used as a drop-in replacement for RN TextInput to allow automatic expanding of a multi-line text input according to the number of lines.

```json
"react-native-autogrow-textinput": "^5.2.0"
```

* **Official Link** : https://github.com/wix/react-native-autogrow-textinput

> ### **React Native Elements**
* The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native. There are many great ui components made by developers all around open source. React Native Elements takes the hassle of assembling these packages together by giving you a ready made kit with consistent api and look and feel.

```json
"react-native-elements": "^1.1.0"
```

* **Official Link** : https://react-native-training.github.io/react-native-elements/docs/getting_started.html

> ### *React Native Paper
* Material Design for React Native (Android & iOS)

```json
"react-native-paper": "^2.15.2"
```
* **Official Link** : https://github.com/callstack/react-native-paper

> ### **React Native Splash Screen**
* A splash screen for react-native, hide when application loaded ,it works on iOS and Android. 

```json
"react-native-splash-screen": "^3.2.0"
```

* **Official Link** : https://github.com/crazycodeboy/react-native-splash-screen

> ### **React Native Text Input Effects**
* Text inputs with custom label and icon animations for iOS and android. Built with react native and inspired by Codrops.

```json
"react-native-textinput-effects": "^0.5.1"
```

> ### **React Native Timeline List View**
* Timeline component for React Native App.

```json
"react-native-timeline-listview": "^0.2.3"
```
* **Official Link** : https://github.com/thegamenicorus/react-native-timeline-listview

> ### **React Native Vector Icons**
* Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.

```json
"react-native-vector-icons": "^6.4.2"
```
* **Official Link** : https://github.com/oblador/react-native-vector-icons


## **package.json file**
> package.json

```json
{
  "name": "SSCWsvit",
  "version": "5.3.0",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios --simulator=\"iPhone X\"",
    "apk": "cd android && ./gradlew assembleRelease",
    "rename": "node ./bin/rename.js",
    "start": "react-native start",
    "test": "jest"
  },
  "dependencies": {
    "eslint": "^5.16.0",
    "react": "16.8.3",
    "react-native": "0.59.5",
    "react-native-autogrow-textinput": "^5.2.0",
    "react-native-calendars": "^1.66.0",
    "react-native-easy-grid": "^0.2.1",
    "react-native-elements": "^1.1.0",
    "react-native-firebase": "^5.3.1",
    "react-native-foldview": "^1.2.1",
    "react-native-gesture-handler": "^1.1.0",
    "react-native-linear-gradient": "^2.5.4",
    "react-native-paper": "^2.15.2",
    "react-native-really-awesome-button": "^1.4.2",
    "react-native-snap-carousel": "^3.7.5",
    "react-native-splash-screen": "^3.2.0",
    "react-native-super-grid": "^3.0.4",
    "react-native-textinput-effects": "^0.5.1",
    "react-native-timeline-listview": "^0.2.3",
    "react-native-vector-icons": "^6.4.2",
    "react-navigation": "^3.8.1",
    "react-navigation-material-bottom-tabs": "^1.0.0",
    "react-redux": "^7.0.2",
    "redux": "^4.0.1"
  },
  "devDependencies": {
    "@babel/core": "^7.4.3",
    "@babel/runtime": "^7.4.3",
    "babel-jest": "^24.7.1",
    "fs-extra": "^7.0.1",
    "jest": "^24.7.1",
    "metro-react-native-babel-preset": "^0.53.1",
    "react-test-renderer": "16.8.3",
    "replace-in-file": "^3.4.4"
  },
  "jest": {
    "preset": "react-native"
  }
}
```

## **TRY OUT**
(1) **Clone the repository** :  $] ``` git clone https://github.com/shashank-shark/SSCWsvit```

(2) **Install the dependencies** : $] `` yarn install``

(3) **Run** : $] ``` react-native run-android```


## **Contact Me**
If you are a small or independent organization/startup looking to grow your business locally and digitally please contact me, I would help you to set up basic version of the android app for free. This is my contribution to support the concept of **Digital India**.