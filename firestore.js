import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDqbxp7Qy33zVvubVOBpRD146_wUbFBPOY",
    authDomain: "firstproj-94aa9.firebaseapp.com",
    databaseURL: "https://firstproj-94aa9.firebaseio.com",
    projectId: "firstproj-94aa9",
    storageBucket: "firstproj-94aa9.appspot.com",
    messagingSenderId: "232616810260",
    appId: "1:232616810260:web:62cb1e6727aec314461401",
    measurementId: "G-BC8817BFN5"
};
firebase.initializeApp(config);
export default firebase;