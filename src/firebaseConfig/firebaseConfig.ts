import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyCZwt4pcLnNVZI9JFoVxxL-09eXPkn5A9A",
    authDomain: "chocolove-a11c4.firebaseapp.com",
    databaseURL: "https://chocolove-a11c4-default-rtdb.firebaseio.com",
    projectId: "chocolove-a11c4",
    storageBucket: "chocolove-a11c4.appspot.com",
    messagingSenderId: "83756462102",
    appId: "1:83756462102:web:3711b2e6ec6144e450c537",
    measurementId: "G-R6JWZDB1PM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}